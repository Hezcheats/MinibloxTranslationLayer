const mcData = require('minecraft-data')("1.8.9");
const startTime = performance.now();

for (let i = 0; i < 14; i++) module.exports[1 + i] = [mcData.itemsByName.stone.id, i];
module.exports[14] = mcData.itemsByName.grass.id;
for (let i = 0; i < 2; i++) module.exports[15 + i] = mcData.itemsByName.dirt.id;
module.exports[21] = mcData.itemsByName.cobblestone.id;
for (let i = 0; i < 8; i++) module.exports[22 + i] = [mcData.itemsByName.planks.id, i % 6];
module.exports[36] = mcData.itemsByName.bedrock.id;
for (let i = 0; i < 2; i++) module.exports[37 + i] = [mcData.itemsByName.sand.id, i];
module.exports[39] = mcData.itemsByName.gravel.id;
module.exports[143] = mcData.itemsByName.glass.id;
module.exports[150] = mcData.itemsByName.grass.id;
for (let i = 0; i < 16; i++) module.exports[157 + i] = [mcData.itemsByName.wool.id, i];
module.exports[235] = mcData.itemsByName.obsidian.id;
module.exports[244] = mcData.itemsByName.oak_stairs.id;
module.exports[245] = mcData.itemsByName.chest.id;
module.exports[246] = mcData.itemsByName.crafting_table.id;
module.exports[248] = mcData.itemsByName.furnace.id;
module.exports[249] = mcData.itemsByName.ladder.id;
module.exports[250] = mcData.itemsByName.cobblestone.id;
module.exports[251] = mcData.itemsByName.snow.id;
module.exports[252] = mcData.itemsByName.ice.id;
module.exports[253] = mcData.itemsByName.snow.id;
module.exports[254] = mcData.itemsByName.cactus.id;
module.exports[265] = mcData.itemsByName.pumpkin.id;
module.exports[297] = mcData.itemsByName.glass_pane.id;
module.exports[298] = mcData.itemsByName.melon.id;
module.exports[312] = mcData.itemsByName.end_stone.id;
module.exports[314] = mcData.itemsByName.dragon_egg.id;
module.exports[315] = mcData.itemsByName.sandstone_stairs.id;
module.exports[316] = mcData.itemsByName.ender_chest.id;
module.exports[317] = mcData.itemsByName.emerald_block.id;
module.exports[318] = mcData.itemsByName.spruce_stairs.id;
module.exports[319] = mcData.itemsByName.birch_stairs.id;
module.exports[320] = mcData.itemsByName.jungle_stairs.id;
module.exports[321] = mcData.itemsByName.birch_stairs.id;
module.exports[322] = mcData.itemsByName.birch_stairs.id;
module.exports[323] = mcData.itemsByName.command_block.id;
for (let i = 0; i < 16; i++) module.exports[354 + i] = [mcData.itemsByName.stained_hardened_clay.id, i];
module.exports[370] = mcData.itemsByName.barrier.id;
module.exports[372] = mcData.itemsByName.hay_block.id;
for (let i = 0; i < 16; i++) module.exports[373 + i] = [mcData.itemsByName.carpet.id, i];
module.exports[390] = mcData.itemsByName.packed_ice.id;
for (let i = 0; i < 16; i++) module.exports[400 + i] = [mcData.itemsByName.stained_glass.id, i];
module.exports[606] = mcData.itemsByName.tnt.id;
module.exports[680] = mcData.itemsByName.flint_and_steel.id;
module.exports[681] = mcData.itemsByName.apple.id;
module.exports[682] = mcData.itemsByName.bow.id;
module.exports[683] = mcData.itemsByName.arrow.id;
module.exports[684] = mcData.itemsByName.coal.id;
module.exports[685] = mcData.itemsByName.coal.id;
module.exports[686] = mcData.itemsByName.diamond.id;
module.exports[687] = mcData.itemsByName.emerald.id;
module.exports[692] = mcData.itemsByName.iron_ingot.id;
module.exports[696] = mcData.itemsByName.gold_ingot.id;
module.exports[699] = mcData.itemsByName.wooden_sword.id;
module.exports[700] = mcData.itemsByName.wooden_shovel.id;
module.exports[701] = mcData.itemsByName.wooden_pickaxe.id;
module.exports[702] = mcData.itemsByName.wooden_axe.id;
module.exports[703] = mcData.itemsByName.wooden_hoe.id;
module.exports[704] = mcData.itemsByName.stone_sword.id;
module.exports[705] = mcData.itemsByName.stone_shovel.id;
module.exports[706] = mcData.itemsByName.stone_pickaxe.id;
module.exports[707] = mcData.itemsByName.stone_axe.id;
module.exports[708] = mcData.itemsByName.stone_hoe.id;
module.exports[709] = mcData.itemsByName.golden_sword.id;
module.exports[710] = mcData.itemsByName.golden_shovel.id;
module.exports[711] = mcData.itemsByName.golden_pickaxe.id;
module.exports[712] = mcData.itemsByName.golden_axe.id;
module.exports[713] = mcData.itemsByName.golden_hoe.id;
module.exports[714] = mcData.itemsByName.iron_sword.id;
module.exports[715] = mcData.itemsByName.iron_shovel.id;
module.exports[716] = mcData.itemsByName.iron_pickaxe.id;
module.exports[717] = mcData.itemsByName.iron_axe.id;
module.exports[718] = mcData.itemsByName.iron_hoe.id;
module.exports[719] = mcData.itemsByName.diamond_sword.id;
module.exports[720] = mcData.itemsByName.diamond_shovel.id;
module.exports[721] = mcData.itemsByName.diamond_pickaxe.id;
module.exports[722] = mcData.itemsByName.diamond_axe.id;
module.exports[723] = mcData.itemsByName.diamond_hoe.id;
module.exports[724] = mcData.itemsByName.diamond_sword.id;
module.exports[725] = mcData.itemsByName.diamond_shovel.id;
module.exports[726] = mcData.itemsByName.diamond_pickaxe.id;
module.exports[727] = mcData.itemsByName.diamond_axe.id;
module.exports[728] = mcData.itemsByName.diamond_hoe.id;
module.exports[729] = mcData.itemsByName.stick.id;
module.exports[730] = mcData.itemsByName.bowl.id;
module.exports[731] = mcData.itemsByName.mushroom_stew.id;
module.exports[732] = mcData.itemsByName.string.id;
module.exports[733] = mcData.itemsByName.feather.id;
module.exports[734] = mcData.itemsByName.gunpowder.id;
module.exports[735] = mcData.itemsByName.wheat_seeds.id;
module.exports[736] = mcData.itemsByName.wheat.id;
module.exports[737] = mcData.itemsByName.bread.id;
module.exports[738] = mcData.itemsByName.leather_helmet.id;
module.exports[739] = mcData.itemsByName.leather_chestplate.id;
module.exports[740] = mcData.itemsByName.leather_leggings.id;
module.exports[741] = mcData.itemsByName.leather_boots.id;
module.exports[742] = mcData.itemsByName.chainmail_helmet.id;
module.exports[743] = mcData.itemsByName.chainmail_chestplate.id;
module.exports[744] = mcData.itemsByName.chainmail_leggings.id;
module.exports[745] = mcData.itemsByName.chainmail_boots.id;
module.exports[746] = mcData.itemsByName.iron_helmet.id;
module.exports[747] = mcData.itemsByName.iron_chestplate.id;
module.exports[748] = mcData.itemsByName.iron_leggings.id;
module.exports[749] = mcData.itemsByName.iron_boots.id;
module.exports[750] = mcData.itemsByName.diamond_helmet.id;
module.exports[751] = mcData.itemsByName.diamond_chestplate.id;
module.exports[752] = mcData.itemsByName.diamond_leggings.id;
module.exports[753] = mcData.itemsByName.diamond_boots.id;
module.exports[754] = mcData.itemsByName.golden_helmet.id;
module.exports[755] = mcData.itemsByName.golden_chestplate.id;
module.exports[756] = mcData.itemsByName.golden_leggings.id;
module.exports[757] = mcData.itemsByName.golden_boots.id;
module.exports[758] = mcData.itemsByName.diamond_helmet.id;
module.exports[759] = mcData.itemsByName.diamond_chestplate.id;
module.exports[760] = mcData.itemsByName.diamond_leggings.id;
module.exports[761] = mcData.itemsByName.diamond_boots.id;
module.exports[762] = mcData.itemsByName.flint.id;
module.exports[763] = mcData.itemsByName.porkchop.id;
module.exports[764] = mcData.itemsByName.cooked_porkchop.id;
module.exports[766] = mcData.itemsByName.golden_apple.id;
module.exports[767] = [mcData.itemsByName.golden_apple.id, 1];
module.exports[776] = mcData.itemsByName.bucket.id;
module.exports[777] = mcData.itemsByName.water_bucket.id;
module.exports[778] = mcData.itemsByName.lava_bucket.id;
module.exports[779] = mcData.itemsByName.water_bucket.id;
module.exports[780] = mcData.itemsByName.snowball.id;
module.exports[781] = mcData.itemsByName.leather.id;
module.exports[782] = mcData.itemsByName.milk_bucket.id;
module.exports[792] = mcData.itemsByName.book.id;
module.exports[793] = mcData.itemsByName.slime_ball.id;
module.exports[794] = mcData.itemsByName.egg.id;
module.exports[795] = mcData.itemsByName.compass.id;
module.exports[797] = mcData.itemsByName.fishing_rod.id;
module.exports[798] = mcData.itemsByName.clock.id;
module.exports[848] = mcData.itemsByName.shears.id;
module.exports[849] = mcData.itemsByName.melon.id;
module.exports[851] = mcData.itemsByName.pumpkin_seeds.id;
module.exports[852] = mcData.itemsByName.melon_seeds.id;
module.exports[853] = mcData.itemsByName.beef.id;
module.exports[854] = mcData.itemsByName.cooked_beef.id;
module.exports[855] = mcData.itemsByName.chicken.id;
module.exports[856] = mcData.itemsByName.cooked_chicken.id;
module.exports[857] = mcData.itemsByName.rotten_flesh.id;
module.exports[858] = mcData.itemsByName.ender_pearl.id;
module.exports[859] = mcData.itemsByName.blaze_rod.id;
module.exports[860] = mcData.itemsByName.ghast_tear.id;
module.exports[861] = mcData.itemsByName.gold_nugget.id;
module.exports[863] = mcData.itemsByName.potion.id;
module.exports[864] = mcData.itemsByName.glass_bottle.id;
module.exports[940] = mcData.itemsByName.experience_bottle.id;
module.exports[941] = mcData.itemsByName.fire_charge.id;
module.exports[942] = mcData.itemsByName.writable_book.id;
module.exports[943] = mcData.itemsByName.written_book.id;
module.exports[947] = mcData.itemsByName.carrot.id;
module.exports[948] = mcData.itemsByName.potato.id;
module.exports[949] = mcData.itemsByName.baked_potato.id;
module.exports[950] = mcData.itemsByName.poisonous_potato.id;
module.exports[951] = mcData.itemsByName.map.id;
module.exports[952] = mcData.itemsByName.golden_carrot.id;
module.exports[960] = mcData.itemsByName.pumpkin_pie.id;
module.exports[967] = mcData.itemsByName.rabbit.id;
module.exports[968] = mcData.itemsByName.cooked_rabbit.id;
module.exports[969] = mcData.itemsByName.rabbit_stew.id;
module.exports[980] = mcData.itemsByName.mutton.id;
module.exports[981] = mcData.itemsByName.cooked_mutton.id;
module.exports[1005] = [mcData.itemsByName.potion.id, 1];
module.exports[1101] = mcData.itemsByName.diamond_sword.id;
module.exports[1102] = mcData.itemsByName.diamond_pickaxe.id;
module.exports[1103] = mcData.itemsByName.diamond_axe.id;
module.exports[1104] = mcData.itemsByName.diamond_shovel.id;
module.exports[1105] = mcData.itemsByName.diamond_hoe.id;
module.exports[1106] = mcData.itemsByName.diamond_helmet.id;
module.exports[1107] = mcData.itemsByName.diamond_chestplate.id;
module.exports[1108] = mcData.itemsByName.diamond_leggings.id;
module.exports[1109] = mcData.itemsByName.diamond_boots.id;

console.log('\x1b[32m[*] Loaded items in', (Math.floor((performance.now() - startTime) * 100) / 100) + 's\x1b[0m');