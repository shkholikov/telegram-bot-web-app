import { Bot, InlineKeyboard } from "./deno.deps.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

const inlineButton = new InlineKeyboard().webApp(
  "URL-KEEPER 🔗",
  "https://shkholikov.github.io/URL-KEEPER/"
);

bot.command("start", async (ctx) => {
  await ctx.reply(`Hello, ${ctx.from?.first_name} 👋🏻`);
  await ctx.reply("Visit my URL-KEEPER website to catch me on other channels ⚡️", {
    reply_markup: inlineButton,
  });
});

bot.on("message", async (ctx) =>
  await ctx.reply("Visit my URL-KEEPER website to catch me on other channels ⚡️", {
      reply_markup: inlineButton,
  })
);

// Start the bot.
bot.start();
