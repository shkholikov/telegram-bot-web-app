import {Bot, GrammyError, HttpError, InlineKeyboard} from "./deno.deps.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

const inlineButton = new InlineKeyboard().webApp(
  "URL-KEEPER 🔗",
  "https://shkholikov.github.io/URL-KEEPER/"
);

bot.command("start", async (ctx) => {
  await ctx.reply(`Hello, ${ctx.from?.first_name} 👋🏻`);
  await ctx.reply(
    "Visit my URL-KEEPER website to catch me on other channels ⚡️",
    {
      reply_markup: inlineButton,
    }
  );
});

bot.on(
  "message",
  async (ctx) =>
    await ctx.reply(
      "Visit my URL-KEEPER website to catch me on other channels ⚡️",
      {
        reply_markup: inlineButton,
      }
    )
);

bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof GrammyError) {
        console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
        console.error("Could not contact Telegram:", e);
    } else {
        console.error("Unknown error:", e);
    }
});

// Start the bot.
// comment before using webhook
// bot.start();
