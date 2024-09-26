const cacheName = "cookieclicker";
const precachedResources = [
  "/",
  "index.html",
  "sw.js",
  "/main.js", 
  "/icon.png",
  "/manifest.json",
  "/minigameGarden.js",
  "/minigameGrimoire.js",
  "/minigameMarket.js",
  "/minigamePantheon.js",
  "/showads.js",
  "/style.js",
  "/excanvas.compiled.js",
  "/dungeons.js",
  "/base64.js",
  "/grab.txt",
  "/ajax.js",
  "/DungeonGen.js",
  "/loc/CS.js",
  "/loc/DE.js",
  "/loc/EN.js",
  "/loc/ES.js",
  "/loc/FR.js",
  "/loc/IT.js",
  "/loc/JA.js",
  "/loc/KO.js",
  "/loc/NL.js",
  "/loc/PL.js",
  "/loc/PT-BR.js",
  "/loc/RU.js",
  "/loc/ZH-CN.js",
  "img/AQWorlds_CookieClicker_300x40.png",
"img/BGgarden.jpg",
"img/BGgrimoire.jpg",
"img/BGmarket.jpg",
"img/BGpantheon.jpg",
"img/alchemylab.png",
"img/alchemylabBackground.png",
"img/alteredGrandma.png",
"img/alternateGrandma.png",
"img/antiGrandma.png",
"img/antimattercondenser.png",
"img/antimattercondenserBackground.png",
"img/aqworldsbanner.jpg",
"img/ascendBox.png",
"img/ascendInfo.png",
"img/ascendSlot.png",
"img/ascendWisp.png",
"img/ascendedBakingPod.png",
"img/bank.png",
"img/bankBackground.png",
"img/bankGrandma.png",
"img/bgBW.jpg",
"img/bgBlack.jpg",
"img/bgBlue.jpg",
"img/bgCandy.jpg",
"img/bgChoco.jpg",
"img/bgChocoDark.jpg",
"img/bgCoarse.jpg",
"img/bgFoil.jpg",
"img/bgGold.jpg",
"img/bgMint.jpg",
"img/bgMoney.jpg",
"img/bgMoneyChart.jpg",
"img/bgPaint.jpg",
"img/bgPink.jpg",
"img/bgPurple.jpg",
"img/bgRed.jpg",
"img/bgSilver.jpg",
"img/bgSky.jpg",
"img/bgSnowy.jpg",
"img/bgSpectrum.jpg",
"img/bgStars.jpg",
"img/bgWhite.jpg",
"img/bgYellowBlue.jpg",
"img/blackGradient.png",
"img/blackGradientLeft.png",
"img/blackGradientSmallTop.png",
"img/bracketPanelLeftS.png",
"img/bracketPanelRightS.png",
"img/brainyGrandma.png",
"img/brokenCookie.png",
"img/brokenCookieHalo.png",
"img/brownStripes.png",
"img/brownStripesLeftEdge.png",
"img/buildings.png",
"img/bunnies.png",
"img/bunnyGrandma.png",
"img/buttonTile.jpg",
"img/caramelWave.png",
"img/chancemaker.png",
"img/chancemakerBackground.png",
"img/chocolateMilkWave.png",
"img/clayBG.jpg",
"img/cloneGrandma.png",
"img/contract.png",
"img/control.png",
"img/cookieShadow.png",
"img/cookieShower1.png",
"img/cookieShower2.png",
"img/cookieShower3.png",
"img/cortex.png",
"img/cortexBackground.png",
"img/cosmicGrandma.png",
"img/cursor.png",
"img/darkNoise.jpg",
"img/darkNoise.png",
"img/darkNoiseTopBar.jpg",
"img/dashnetLogo.png",
"img/discord.png",
"img/dragon.png",
"img/dragonBG.png",
"img/dragonFrame.png",
"img/dungeonDot.png",
"img/dungeonFactory.png",
"img/dungeonFoes.png",
"img/dungeonHeroes.png",
"img/dungeonIcons.png",
"img/dungeonItems.png",
"img/dungeonMapFactory.jpg",
"img/dungeonOverlay.png",
"img/dungeonPictos.png",
"img/dungeonTiles.png",
"img/easterEggs.png",
"img/elfGrandma.png",
"img/empty.png",
"img/emptyFrame.png",
"img/factory.png",
"img/factoryBackground.png",
"img/farm.png",
"img/farmBackground.png",
"img/farmerGrandma.png",
"img/favicon.ico
"img/featherLeft.png",
"img/featherRight.png",
"img/filler.png",
"img/fractalEngine.png",
"img/fractalEngineBackground.png",
"img/frameBorder.png",
"img/frostedReindeer.png",
"img/gardenPlants.png",
"img/gardenPlots.png",
"img/gardenTip.png",
"img/girlscoutChip.png",
"img/girlscoutCrumb.png",
"img/girlscoutDoe.png",
"img/girlscoutLucky.png",
"img/glint.jpg",
"img/glint.png",
"img/goldCookie.png",
"img/grandma.png",
"img/grandmaBackground.png",
"img/grandmas1.jpg",
"img/grandmas2.jpg",
"img/grandmas3.jpg",
"img/grandmasGrandma.png",
"img/grimoireBG.png",
"img/heartStorm.png",
"img/hearts.png",
"img/heavenRing1.jpg",
"img/heavenRing2.jpg",
"img/heavenlyMoney.png",
"img/heraldFlag.png",
"img/icon.ico",
"img/icon.png",
"img/icons.png",
"img/idleverse.png",
"img/idleverseBackground.png",
"img/imperfectCookie.png",
"img/infoBG.png",
"img/infoBGfade.png",
"img/javascriptconsole.png",
"img/javascriptconsoleBackground.png",
"img/levelUp.png",
"img/linkDash.png",
"img/linkPulse.gif",
"img/linkPulse.png",
"img/lockOff.png",
"img/lockOn.png",
"img/luckyGrandma.png",
"img/mapBG.jpg",
"img/mapIcons.png",
"img/marbleBG.jpg",
"img/marshmallows.png",
"img/messageBG.png",
"img/metaGrandma.png",
"img/milk.png",
"img/milkBanana.png",
"img/milkBlack.png",
"img/milkBlackcurrant.png",
"img/milkBlood.png",
"img/milkBlueFire.png",
"img/milkBlueberry.png",
"img/milkCaramel.png",
"img/milkCherry.png",
"img/milkChocolate.png",
"img/milkCoconut.png",
"img/milkCoffee.png",
"img/milkDragonfruit.png",
"img/milkFire.png",
"img/milkGold.png",
"img/milkGreenFire.png",
"img/milkHazelnut.png",
"img/milkHoney.png",
"img/milkLicorice.png",
"img/milkLime.png",
"img/milkMaple.png",
"img/milkMelon.png",
"img/milkMint.png",
"img/milkOrange.png",
"img/milkPeach.png",
"img/milkPlain.png",
"img/milkRaspberry.png",
"img/milkRose.png",
"img/milkSoy.png",
"img/milkSpiced.png",
"img/milkStars.png",
"img/milkStrawberry.png",
"img/milkTea.png",
"img/milkVanilla.png",
"img/milkWave.png",
"img/milkZebra.png",
"img/mine.png",
"img/mineBackground.png",
"img/minerGrandma.png",
"img/money.png",
"img/mysticBG.jpg",
"img/nest.png",
"img/orangeWave.png",
"img/panelBG.png",
"img/panelGradientBottom.png",
"img/panelGradientLeft.png",
"img/panelGradientRight.png",
"img/panelGradientTop.png",
"img/panelHorizontal.png",
"img/panelMenu.png",
"img/panelMenu2.png",
"img/panelMenu3.png",
"img/panelVertical.png",
"img/pantheonBG.png",
"img/parade.png",
"img/patreon.png",
"img/perfectCookie.png",
"img/pieFill.png",
"img/playsaurusLogo.png",
"img/playsaurusbanner1.png",
"img/playsaurusbanner2.png",
"img/playsaurusbanner3.png",
"img/pointGlow.gif",
"img/pointyLad.png",
"img/portal.png",
"img/portalBackground.png",
"img/portraitChip.png",
"img/portraitCrumb.png",
"img/portraitDoe.png",
"img/portraitLucky.png",
"img/prestigeBar.jpg",
"img/prestigeBarCap.png",
"img/prism.png",
"img/prismBackground.png",
"img/rainbowGrandma.png",
"img/raspberryWave.png",
"img/roundFrameBorder.png",
"img/roundedPanelBG.png",
"img/roundedPanelBGS.png",
"img/roundedPanelLeft.png",
"img/roundedPanelLeftS.png",
"img/roundedPanelRight.png",
"img/roundedPanelRightS.png",
"img/santa.png",
"img/scriptGrandma.png",
"img/selectTarget.png",
"img/sentientFurnace.png",
"img/shadedBorders.png",
"img/shadedBordersGold.png",
"img/shadedBordersRed.png",
"img/shadedBordersSoft.png",
"img/shimmeringVeil.png",
"img/shine.png",
"img/shineGold.png",
"img/shineRed.png",
"img/shineSpoke.png",
"img/shinyWinkler.png",
"img/shinyWrinkler.png",
"img/shinyWrinklerBits.png",
"img/shipment.png",
"img/shipmentBackground.png",
"img/smallCookies.png",
"img/smallDollars.png",
"img/snow.jpg",
"img/snow2.jpg",
"img/sparkles.jpg",
"img/spellBG.png",
"img/spinnyBig.png",
"img/spinnySmall.png",
"img/spookyCookie.png",
"img/starbg.jpg",
"img/storeTile.jpg",
"img/sugarLump.png",
"img/temple.png",
"img/templeBackground.png",
"img/templeGrandma.png",
"img/timemachine.png",
"img/timemachineBackground.png",
"img/timerBars.png",
"img/tinyEyeEmpty.png",
"img/tinyEyeOff.png",
"img/tinyEyeOn.png",
"img/tinyglobe.gif",
"img/tinyglobeSheet.gif",
"img/transmutedGrandma.png",
"img/turnInto.png",
"img/upgradeFrame.png",
"img/upgradeFrameHeavenly.png",
"img/upgradeFrameOld.png",
"img/upgradeFrameShadowOld.png",
"img/upgradeHighlight.jpg",
"img/upgradeHighlight.png",
"img/upgradeSelector.png",
"img/weeHoodie.png",
"img/winkler.png",
"img/winterFrame.png",
"img/winterWinkler.png",
"img/winterWrinkler.png",
"img/witchGrandma.png",
"img/wizardtower.png",
"img/wizardtowerBackground.png",
"img/workerGrandma.png",
"img/wrathContract.png",
"img/wrathCookie.png",
"img/wrinkler.png",
"img/wrinklerBits.png",
"img/wrinklerBitsOld.png",
"img/wrinklerBlink.png",
"img/wrinklerGooglies.png",
"img/wrinklerShadow.png",
"img/you.png",
"img/youAddons.png",
"img/youBackground.png",
"img/youLight.png",
  "/snd/buy1.mp3",
"/snd/buy2.mp3",
"/snd/buy3.mp3",
"/snd/buy4.mp3",
"/snd/buyHeavenly.mp3",
"/snd/cashIn.mp3",
"/snd/cashIn2.mp3",
"/snd/cashOut.mp3",
"/snd/charging.mp3",
"/snd/chime.mp3",
"/snd/choir.mp3",
"/snd/click1.mp3",
"/snd/click2.mp3",
"/snd/click3.mp3",
"/snd/click4.mp3",
"/snd/click5.mp3",
"/snd/click6.mp3",
"/snd/click7.mp3",
"/snd/clickOff.mp3",
"/snd/clickOff2.mp3",
"/snd/clickOn.mp3",
"/snd/clickOn2.mp3",
"/snd/clickb1.mp3",
"/snd/clickb2.mp3",
"/snd/clickb3.mp3",
"/snd/clickb4.mp3",
"/snd/clickb5.mp3",
"/snd/clickb6.mp3",
"/snd/clickb7.mp3",
"/snd/cookieBreak.mp3",
"/snd/cymbalCrash.mp3",
"/snd/cymbalRev.mp3",
"/snd/fortune.mp3",
"/snd/freezeGarden.mp3",
"/snd/giftGet.mp3",
"/snd/giftSend.mp3",
"/snd/growl.mp3",
"/snd/harvest1.mp3",
"/snd/harvest2.mp3",
"/snd/harvest3.mp3",
"/snd/jingle.mp3",
"/snd/jingleClick.mp3",
"/snd/levelPrestige.mp3",
"/snd/page.mp3",
"/snd/pop1.mp3",
"/snd/pop2.mp3",
"/snd/pop3.mp3",
"/snd/press.mp3",
"/snd/sell1.mp3",
"/snd/sell2.mp3",
"/snd/sell3.mp3",
"/snd/sell4.mp3",
"/snd/shimmerClick.mp3",
"/snd/smallCymbalCrash.mp3",
"/snd/smallTick.mp3",
"/snd/snarl.mp3",
"/snd/spell.mp3",
"/snd/spellFail.mp3",
"/snd/spirit.mp3",
"/snd/squeak1.mp3",
"/snd/squeak2.mp3",
"/snd/squeak3.mp3",
"/snd/squeak4.mp3",
"/snd/squish1.mp3",
"/snd/squish2.mp3",
"/snd/squish3.mp3",
"/snd/squish4.mp3",
"/snd/switch.mp3",
"/snd/swooshIn.mp3",
"/snd/swooshOut.mp3",
"/snd/thud.mp3",
"/snd/tick.mp3",
"/snd/tickOff.mp3",
"/snd/till1.mp3",
"/snd/till2.mp3",
"/snd/till3.mp3",
"/snd/tillb1.mp3",
"/snd/tillb2.mp3",
"/snd/tillb3.mp3",
"/snd/toneTick.mp3",
"/snd/upgrade.mp3",
];
self.addEventListener("install", event => {
   event.waitUntil(
      caches.open(cacheName)
      .then(cache => {
         return cache.addAll(precachedResources);
      });
   );
});
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.match(/^\/inbox/)) {
    event.respondWith(networkFirst(event.request));
  }
});
