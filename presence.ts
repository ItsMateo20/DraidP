const presence = new Presence({
	clientId: "831829384884518923",
}),
	strings = presence.getStrings({
		play: "presence.playback.playing",
		pause: "presence.playback.paused",
	});


presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
		largeImageKey: "smalldraidlogo",
		buttons: [
			{
				label: "Visit website",
				url: "https://draid.vercel.app"
			}
		]
	};


	if (document.title == "500: INTERNAL_SERVER_ERROR") {
		presenceData.details = "Viewing 500 error page";
	} else {
		if (document.querySelector('h6[class="dropdown-header"').textContent !== "") {
			presenceData.state = document.querySelector('h6[class="dropdown-header"').textContent;
		}
		else {
			presenceData.state = "Not logged in";
		}

		if (document.location.href.endsWith("/commands")) {
			presenceData.details = "Viewing commands";
			presenceData.smallImageKey = "reading";
			presenceData.smallImageText = `Looking at ${document.querySelector('button[class="btn btn-outline-secondary active"]').innerHTML.toLowerCase()} commands`;
			if (document.querySelector('button[class="btn btn-outline-secondary active"]').innerHTML.toLowerCase() === "games") {
				presenceData.smallImageText = "Looking at game commands";
			} else if (document.querySelector('button[class="btn btn-outline-secondary active"]').innerHTML.toLowerCase() === "others") {
				presenceData.smallImageText = "Looking at other commands";
			} else if (document.querySelector('button[class="btn btn-outline-secondary active"]').innerHTML.toLowerCase() === "settings") {
				presenceData.smallImageText = "Looking at setting commands";
			}
		} else if (document.location.href.endsWith("/contact")) {
			presenceData.details = "Viewing contacts";
		} else if (document.location.href.endsWith("/dashboard/guilds")) {
			presenceData.details = "Viewing dashboard";
			presenceData.smallImageKey = "search";
			presenceData.smallImageText = "Selecting a guild";
		} else if (document.location.href.includes("/dashboard/")) {
			presenceData.details = `Viewing ${document.querySelector("h1").textContent}`;
			presenceData.smallImageKey = document.querySelector('img[alt="servericon"]').getAttribute("src");
			presenceData.smallImageText = "Changing settings";
		} else if (document.location.href.includes("/user/")) {
			presenceData.details = `Viewing ${document.querySelector("h3").textContent}'s profile`;
			presenceData.smallImageKey = document.querySelector('img[alt="useravatar"]').getAttribute("src");
			presenceData.buttons = [{ label: "Visit Website", url: "https://draid.vercel.app" }, { label: "Visit Profile", url: document.location.href }];
		} else {
			presenceData.details = "Viewing home page";
		}
	}

	presence.setActivity(presenceData);
});
