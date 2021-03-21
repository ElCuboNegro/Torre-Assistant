const {
  conversation,
  Canvas,
} = require('@assistant/conversation');
const functions = require('firebase-functions');

const INSTRUCTIONS = 'Quieres que cambie de color o que siga girando?';

const CANVAS_URL = 'https://torre-assistant.web.app';

const tints = {
  black: 0x000000,
  blue: 0x0000FF,
  green: 0x00FF00,
  cyan: 0x00FFFF,
  indigo: 0x4B0082,
  magenta: 0x6A0DAD,
  maroon: 0x800000,
  grey: 0x808080,
  brown: 0xA52A2A,
  violet: 0xEE82EE,
  red: 0xFF0000,
  purple: 0xFF00FF,
  orange: 0xFFA500,
  pink: 0xFFC0CB,
  yellow: 0xFFFF00,
  white: 0xFFFFFF,
};

const app = conversation({debug: true});

app.handle('welcome', (conv) => {
  if (!conv.device.capabilities.includes('INTERACTIVE_CANVAS')) {
    conv.add('Lo siento! Si no tienes una pantalla no puedo mostrarte gran parte de mi hermosa personalidad, pero, mientras tanto, podemos intentarlo sólo hablando.');
    conv.scene.next.name = 'actions.page.END_CONVERSATION';
    return;
  }
  conv.add('Bienvenido! quieres que cambie de color o que deje de girar?? ' +
    'También puedes pedirme que te lo recuerde luego.');
  conv.add(new Canvas({
    // Update this placeholder string with the URL for your canvas web app.
    url: CANVAS_URL,
  }));
});

app.handle('fallback', (conv) => {
  conv.add(`No entendí. Pero puedes cambiar mi color o pedirme que siga girando!!!.`);
  conv.add(new Canvas());
});

app.handle('change_color', (conv) => {
  const color =
    conv.intent.params.color? conv.intent.params.color.resolved : null;
  if (!(color in tints)) {
    conv.add(`Sorry, I don't know that color. Try red, blue, or green!`);
    conv.add(new Canvas());
    return;
  }
  conv.add(`Ok, I changed my color to ${color}. What else?`);
    conv.add(new Canvas({
      data: {
        command: 'TINT',
        tint: tints[color],
      },
    }));
});

app.handle('start_spin', (conv) => {
  conv.add(`Ok, I'm spinning. What else?`);
  conv.add(new Canvas({
    data: {
      command: 'SPIN',
      spin: true,
    },
  }));
});

app.handle('stop_spin', (conv) => {
  conv.add('Ok, I paused spinning. What else?');
  conv.add(new Canvas({
    data: {
      command: 'SPIN',
      spin: false,
    },
  }));
});

app.handle('instructions', (conv) => {
  conv.add(INSTRUCTIONS);
  conv.add(new Canvas());
});

app.handle('restart', (conv) => {
  conv.add(INSTRUCTIONS);
  conv.add(new Canvas({
    data: {
      command: 'RESTART_GAME',
    },
  }));
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
