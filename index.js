
"use strict";
/// <reference path="typings/altv-client.d.ts"/>
/// <reference path="typings/natives.d.ts"/>
import * as alt from "alt-client";
import * as game from "natives";
import * as native from 'natives';

alt.onServer("freeroam:spawned", () => {
  game.setPedDefaultComponentVariation(alt.Player.local.scriptID);
});

alt.onServer("freeroam:switchInOutPlayer", (in_switch, instant_switch, switch_type) => {
  if (in_switch) {
    game.switchInPlayer(alt.Player.local.scriptID);
  } else {
    game.switchOutPlayer(alt.Player.local.scriptID, instant_switch, switch_type);
  }
});

// Source: https://github.com/Stuyk/altV-Open-Roleplay/blob/5ccdeb9e960a7e0fde758cc89c366ed2953cc639/resources/orp/client/systems/interiors.mjs
alt.onServer("freeroam:Interiors", () => {
  alt.requestIpl("ex_dt1_02_office_02b");
  alt.requestIpl("chop_props");
  alt.requestIpl("FIBlobby");
  alt.removeIpl("FIBlobbyfake");
  alt.requestIpl("FBI_colPLUG");
  alt.requestIpl("FBI_repair");
  alt.requestIpl("v_tunnel_hole");
  alt.requestIpl("TrevorsMP");
  alt.requestIpl("TrevorsTrailer");
  alt.requestIpl("TrevorsTrailerTidy");
  alt.removeIpl("farm_burnt");
  alt.removeIpl("farm_burnt_lod");
  alt.removeIpl("farm_burnt_props");
  alt.removeIpl("farmint_cap");
  alt.removeIpl("farmint_cap_lod");
  alt.requestIpl("farm");
  alt.requestIpl("farmint");
  alt.requestIpl("farm_lod");
  alt.requestIpl("farm_props");
  alt.requestIpl("facelobby");
  alt.removeIpl("CS1_02_cf_offmission");
  alt.requestIpl("CS1_02_cf_onmission1");
  alt.requestIpl("CS1_02_cf_onmission2");
  alt.requestIpl("CS1_02_cf_onmission3");
  alt.requestIpl("CS1_02_cf_onmission4");
  alt.requestIpl("v_rockclub");
  alt.requestIpl("v_janitor");
  alt.removeIpl("hei_bi_hw1_13_door");
  alt.requestIpl("bkr_bi_hw1_13_int");
  alt.requestIpl("ufo");
  alt.requestIpl("ufo_lod");
  alt.requestIpl("ufo_eye");
  alt.removeIpl("v_carshowroom");
  alt.removeIpl("shutter_open");
  alt.removeIpl("shutter_closed");
  alt.removeIpl("shr_int");
  alt.requestIpl("csr_afterMission");
  alt.requestIpl("v_carshowroom");
  alt.requestIpl("shr_int");
  alt.requestIpl("shutter_closed");
  alt.requestIpl("smboat");
  alt.requestIpl("smboat_distantlights");
  alt.requestIpl("smboat_lod");
  alt.requestIpl("smboat_lodlights");
  alt.requestIpl("cargoship");
  alt.requestIpl("railing_start");
  alt.removeIpl("sp1_10_fake_interior");
  alt.removeIpl("sp1_10_fake_interior_lod");
  alt.requestIpl("sp1_10_real_interior");
  alt.requestIpl("sp1_10_real_interior_lod");
  alt.removeIpl("id2_14_during_door");
  alt.removeIpl("id2_14_during1");
  alt.removeIpl("id2_14_during2");
  alt.removeIpl("id2_14_on_fire");
  alt.removeIpl("id2_14_post_no_int");
  alt.removeIpl("id2_14_pre_no_int");
  alt.removeIpl("id2_14_during_door");
  alt.requestIpl("id2_14_during1");
  alt.removeIpl("Coroner_Int_off");
  alt.requestIpl("coronertrash");
  alt.requestIpl("Coroner_Int_on");
  alt.removeIpl("bh1_16_refurb");
  alt.removeIpl("jewel2fake");
  alt.removeIpl("bh1_16_doors_shut");
  alt.requestIpl("refit_unload");
  alt.requestIpl("post_hiest_unload");
  alt.requestIpl("Carwash_with_spinners");
  alt.requestIpl("KT_CarWash");
  alt.requestIpl("ferris_finale_Anim");
  alt.removeIpl("ch1_02_closed");
  alt.requestIpl("ch1_02_open");
  alt.requestIpl("AP1_04_TriAf01");
  alt.requestIpl("CS2_06_TriAf02");
  alt.requestIpl("CS4_04_TriAf03");
  alt.removeIpl("scafstartimap");
  alt.requestIpl("scafendimap");
  alt.removeIpl("DT1_05_HC_REMOVE");
  alt.requestIpl("DT1_05_HC_REQ");
  alt.requestIpl("DT1_05_REQUEST");
  alt.requestIpl("dt1_05_hc_remove");
  alt.requestIpl("dt1_05_hc_remove_lod");
  alt.requestIpl("FINBANK");
  alt.removeIpl("DT1_03_Shutter");
  alt.removeIpl("DT1_03_Gr_Closed");
  alt.requestIpl("golfflags");
  alt.requestIpl("airfield");
  alt.requestIpl("v_garages");
  alt.requestIpl("v_foundry");
  alt.requestIpl("hei_yacht_heist");
  alt.requestIpl("hei_yacht_heist_Bar");
  alt.requestIpl("hei_yacht_heist_Bedrm");
  alt.requestIpl("hei_yacht_heist_Bridge");
  alt.requestIpl("hei_yacht_heist_DistantLights");
  alt.requestIpl("hei_yacht_heist_enginrm");
  alt.requestIpl("hei_yacht_heist_LODLights");
  alt.requestIpl("hei_yacht_heist_Lounge");
  alt.requestIpl("hei_carrier");
  alt.requestIpl("hei_Carrier_int1");
  alt.requestIpl("hei_Carrier_int2");
  alt.requestIpl("hei_Carrier_int3");
  alt.requestIpl("hei_Carrier_int4");
  alt.requestIpl("hei_Carrier_int5");
  alt.requestIpl("hei_Carrier_int6");
  alt.requestIpl("hei_carrier_LODLights");
  alt.requestIpl("bkr_bi_id1_23_door");
  alt.requestIpl("lr_cs6_08_grave_closed");
  alt.requestIpl("hei_sm_16_interior_v_bahama_milo_");
  alt.requestIpl("CS3_07_MPGates");
  alt.requestIpl("cs5_4_trains");
  alt.requestIpl("v_lesters");
  alt.requestIpl("v_trevors");
  alt.requestIpl("v_michael");
  alt.requestIpl("v_comedy");
  alt.requestIpl("v_cinema");
  alt.requestIpl("V_Sweat");
  alt.requestIpl("V_35_Fireman");
  alt.requestIpl("redCarpet");
  alt.requestIpl("triathlon2_VBprops");
  alt.requestIpl("jetstenativeurnel");
  alt.requestIpl("Jetsteal_ipl_grp1");
  alt.requestIpl("v_hospital");
  alt.removeIpl("RC12B_Default");
  alt.removeIpl("RC12B_Fixed");
  alt.requestIpl("RC12B_Destroyed");
  alt.requestIpl("RC12B_HospitalInterior");
  alt.requestIpl("canyonriver01");
  alt.requestIpl("canyonriver01_lod");
  alt.requestIpl("cs3_05_water_grp1");
  alt.requestIpl("cs3_05_water_grp1_lod");
  alt.requestIpl("trv1_trail_start");
  alt.requestIpl("CanyonRvrShallow");
});

alt.onServer("freeroam:sendNotification", sendNotification);

function sendNotification(textColor, bgColor, message, blink) {
  game.setColourOfNextTextComponent(textColor);
  game.setNotificationBackgroundColor(bgColor);
  game.setNotificationTextEntry("STRING");
  game.addTextComponentSubstringPlayerName(message);
  game.drawNotification(blink, false);
}


// BLIPS MAKER
export function createBlip(pos, sprite, color, label) {
  if (!pos || !sprite) {
      return;
  }
  const blip = native.addBlipForCoord(pos.x, pos.y, pos.z);
  native.setBlipAsShortRange(blip, true);
  native.setBlipSprite(blip, sprite);
  native.setBlipColour(blip, color);
  native.beginTextCommandSetBlipName('STRING');
  native.addTextComponentSubstringPlayerName(label);
  native.endTextCommandSetBlipName(blip);
  return blip;
}

alt.on('connectionComplete', () => {
  // misc
  createBlip({ x: -339.30987548828125, y: -135.37582397460938, z: 38.3619384765625 }, 72, 0, 'Los Santos Customs');
  createBlip({ x: 314.6241760253906, y: -593.1956176757812, z: 43.2821044921875 }, 61, 49, 'Ligonine');
  createBlip({ x: -712.1406860351562, y: -1298.914306640625, z: 5.100341796875 }, 545, 68, 'Vairavimo mokykla');
  createBlip({ x: -1597.7274169921875, y: -871.5032958984375, z: 11.8740234375 }, 724, 73, 'Tr. priemoniu turgus'); 
  createBlip({ x: -599.3406372070312, y: -929.3538208007812, z: 23.854248046875 }, 590, 75, 'WeazelNews');
  createBlip({ x: -599.3406372070312, y: -929.3538208007812, z: 23.854248046875 }, 267, 38, 'Policijos departamentas');
  // Centrinis bankas ir bankomatai
  createBlip({ x: 229.54286193847656, y: 214.06153869628906, z: 104.952392578125 }, 605, 0, 'Centrinis bankas');

  // Degalines
  createBlip({ x: -67.74066162109375, y: -1764.1845703125, z: 28.7237548828125 }, 361, 81, 'Degaline');
  createBlip({ x: 173.56483459472656, y: -1562.914306640625, z: 28.7069091796875 }, 361, 81, 'Degaline');
  createBlip({ x: 268.8659362792969, y: -1263.112060546875, z: 28.5889892578125 }, 361, 81, 'Degaline');
  createBlip({ x: 622.984619140625, y: 270.1054992675781, z: 102.5260009765625 }, 361, 81, 'Degaline');
  createBlip({ x: -1803.6263427734375, y: 800.4395751953125, z: 137.9443359375 }, 361, 81, 'Degaline');
  createBlip({ x: -2555.156005859375, y: 2331.230712890625, z: 33.05419921875 }, 361, 81, 'Degaline');
  createBlip({ x: 51.270328521728516, y: 2779.7275390625, z: 57.8740234375 }, 361, 81, 'Degaline');
  createBlip({ x: 1204.6812744140625, y: 2659.081298828125, z: 37.82275390625 }, 361, 81, 'Degaline');
  createBlip({ x: 2002.3121337890625, y: 3774.6198730468755, z: 32.177978515625 }, 361, 81, 'Degaline');
  createBlip({ x: 2680.15380859375, y: 3264.158203125, z: 55.228515625 }, 361, 81, 'Degaline');
  createBlip({ x: 2580.474609375, y: 361.68792724609375, z: 108.4571533203125 }, 361, 81, 'Degaline');
  createBlip({ x: 1209.2967529296875, y: -1401.4549560546875, z: 35.2109375 }, 361, 81, 'Degaline');
  createBlip({ x: -721.97802734375, y: -935.6439819335938, z: 19.00146484375 }, 361, 81, 'Degaline');

  // Uzkandines
  createBlip({ x: -185.24835205078125, y: -1427.82861328125, z: 31.4703369140625 }, 52, 46, 'Užkandine');
  createBlip({ x: -657.5340576171875, y: -678.975830078125, z: 31.4703369140625 }, 52, 46, 'Užkandinė');
  createBlip({ x: -585.032958984375, y: -872.017578125, z: 25.82568359375 }, 52, 46, 'Užkandinė');
  createBlip({ x: -1546.6944580078125, y: -466.984619140625, z: 36.188232421875 }, 52, 46, 'Užkandinė');
  createBlip({ x: 81.32307434082031, y: 274.5230712890625, z: 110.20947265625 }, 52, 46, 'Užkandinė');
  createBlip({ x: 1234.2989501953125, y: -354.80438232421875, z: 69.0791015625 }, 52, 46, 'Užkandinė');

  // Parduotuves
  createBlip({ x: 1164.870361328125, y: -322.6549377441406, z: 69.197021484375 }, 52, 0, 'Parduotuve');
  createBlip({ x: -3038.953857421875, y: 584.2944946289062, z: 7.8974609375 }, 52, 0, 'Parduotuve');
  createBlip({ x: -3242.24169921875, y: 999.7582397460938, z: 12.817626953125 }, 52, 0, 'Parduotuve');
  createBlip({ x: 1697.947265625, y: 4922.5712890625, z: 42.052001953125 }, 52, 0, 'Parduotuve');
  createBlip({ x: 2677.81982421875, y: 3279.217529296875, z: 55.228515625 }, 52, 0, 'Parduotuve');
  createBlip({ x: 1960.04833984375, y: 3739.89892578125, z: 32.3297119140625 }, 52, 0, 'Parduotuve');
  createBlip({ x: 549.2571411132812, y: 2671.279052734375, z: 42.153076171875 }, 52, 0, 'Parduotuve');
  createBlip({ x: 372.4219665527344, y: 326.4791259765625, z: 103.5538330078125 }, 52, 0, 'Parduotuve');
  createBlip({ x: -1819.859375, y: 794.7560424804688, z: 138.062255859375 }, 52, 0, 'Parduotuve');
  createBlip({ x: 2557.107666015625, y: 380.6109924316406, z: 108.6087646484375 }, 52, 0, 'Parduotuve');
  createBlip({ x: -705.876953125, y: -913.3846435546875, z: 19.20361328125 }, 52, 0, 'Parduotuve');

  // Rubu parduotuve
  createBlip({ x: 1.1076923608779907, y: 6514.81298828125, z: 31.874755859375 }, 73, 0, 'Rubu parduotuve'); 
  createBlip({ x: 1690.1142578125, y: 4820.61083984375, z: 42.052001953125 }, 73, 0, 'Rubu parduotuve'); 
  createBlip({ x: 1198.958251953125, y: 2706.698974609375, z: 38.210205078125 }, 73, 0, 'Rubu parduotuve'); 
  createBlip({ x: 124.86593627929688, y: -216.6857147216797, z: 54.5545654296875 }, 73, 0, 'Rubu parduotuve'); 
  createBlip({ x: -159.99560546875, y: -303.6000061035156, z: 39.7266845703125 }, 73, 0, 'Rubu parduotuve'); 
  createBlip({ x: -712.7604370117188, y: -154.41758728027344, z: 37.4014892578125 }, 73, 0, 'Rubu parduotuve');
  createBlip({ x: -1453.068115234375, y: -235.89889526367188, z: 49.802978515625 }, 73, 0, 'Rubu parduotuve'); 
  createBlip({ x: -1197.243896484375, y: -774.5538330078125, z: 17.3165283203125 }, 73, 0, 'Rubu parduotuve'); 
  createBlip({ x: -1337.2747802734375, y: -1278.2769775390625, z: 4.864501953125 }, 362, 0, 'Kaukiu parduotuve'); // kaukiu shopas
  createBlip({ x: -819.4022216796875, y: -1076.822021484375, z: 11.3179931640625 }, 73, 0, 'Rubu parduotuve'); 
  createBlip({ x: 421.22637939453125, y: -807.4417724609375, z: 29.4820556640625}, 73, 0, 'Rubu parduotuve'); 
  createBlip({ x: 78.71208953857422, y: -1391.248291015625, z: 29.3641357421875}, 73, 0, 'Rubu parduotuve'); 

 // Darbai
 createBlip({ x: 1523.4593505859375, y: 3917.419677734375, z: 31.6724853515625 }, 317, 32, 'Zvejyba'); 
 createBlip({ x: -1850.5845947265625, y: -1232.3868408203125, z: 13.0029296875 }, 317, 32, 'Zvejyba'); 
 createBlip({ x: -3427.371337890625, y: 967.8593139648438, z: 8.3355712890625 }, 317, 32, 'Zvejyba'); 
}
);


alt.on('keydown', (key) => {
  if(key === 113){ // f2
    startRecording();
  }

  if(key === 114){ // f3
    stopRecordingAndSaveClip();
  }

  if(key === 115){ // f4
    enableRockstarEditor();
  }

  if(key === 116){ // f5
    disableRockstarEditor();
  }
});

function startRecording() {
  native.startRecording(1);
}

function stopRecordingAndSaveClip() {
  native.stopRecordingAndSaveClip();
}

function enableRockstarEditor() {
  native.activateRockstarEditor(0);
  native.setPlayerRockstarEditorDisabled(false);

  const interval = setInterval(() => {
      if (native.isScreenFadedOut()) {
          native.doScreenFadeIn(1000);
          clearInterval(interval);
      }
  }, 1000);
}

function disableRockstarEditor() {
  native.setPlayerRockstarEditorDisabled(true);
}

const playAnim = async (dict, ...) => {
  await alt.Utils.requestAnimDict("cellphone@");
  native.taskPlayAnim(alt.Player.local.scriptID, "cellphone@", "cellphone_call_listen_base", 8.0, 8.0, -1, 49, 1, false, false, false); }, 50);
}