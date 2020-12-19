/*
*	@filename	SoloLeveling.js
*	@author		isid0re
*	@desc		AutoPlay leveling for any class type. Just make a character and name it. Uses predefined buildtemplates.
*				Make sure kolbot difficulty is set to "highest"
*	@TODO		- dynamic tiers calibrate weights for mercscore and tierscore
*/

function eye () {
	if (!Pather.accessToAct(3) || me.getItem(553) || me.getItem(174) || Misc.checkQuest(18, 0)) {
		return true;
	} // skip eye

	Town.townTasks();
	print('ÿc9SoloLevelingÿc0: starting eye');
	me.overhead("eye");

	if (!Pather.checkWP(76)) {
		Pather.getWP(76);
	} else {
		Pather.useWaypoint(76);
	}

	Precast.doPrecast(true);

	if (!Pather.moveToExit([76, 85], true)) {
		print('ÿc9SoloLevelingÿc0: Failed to get the eye');
	}

	Town.goToTown();
	Town.doChores();
	Town.buyPots(10, "Antidote"); // antidote
	Town.drinkPots();
	Pather.usePortal(85, me.name);
	Pather.moveToPreset(me.area, 2, 407);
	Attack.clear(0x7);
	Quest.collectItem(553, 407);
	Town.goToTown();
	Quest.stashItem(553);

	return true;
};
