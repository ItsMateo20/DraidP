const presence = new Presence({
    clientId: "831829384884518923",
}), strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused",
});
presence.on("UpdateData", async () => {
    const presenceData = {
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
    }
    else {
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
            }
            else if (document.querySelector('button[class="btn btn-outline-secondary active"]').innerHTML.toLowerCase() === "others") {
                presenceData.smallImageText = "Looking at other commands";
            }
            else if (document.querySelector('button[class="btn btn-outline-secondary active"]').innerHTML.toLowerCase() === "settings") {
                presenceData.smallImageText = "Looking at setting commands";
            }
        }
        else if (document.location.href.endsWith("/contact")) {
            presenceData.details = "Viewing contacts";
        }
        else if (document.location.href.endsWith("/dashboard/guilds")) {
            presenceData.details = "Viewing dashboard";
            presenceData.smallImageKey = "search";
            presenceData.smallImageText = "Selecting a guild";
        }
        else if (document.location.href.includes("/dashboard/")) {
            presenceData.details = `Viewing ${document.querySelector("h1").textContent}`;
            presenceData.smallImageKey = document.querySelector('img[alt="servericon"]').getAttribute("src");
            presenceData.smallImageText = "Changing settings";
        }
        else if (document.location.href.includes("/user/")) {
            presenceData.details = `Viewing ${document.querySelector("h3").textContent}'s profile`;
            presenceData.smallImageKey = document.querySelector('img[alt="useravatar"]').getAttribute("src");
            presenceData.buttons = [{ label: "Visit Website", url: "https://draid.vercel.app" }, { label: "Visit Profile", url: document.location.href }];
        }
        else {
            presenceData.details = "Viewing home page";
        }
    }
    presence.setActivity(presenceData);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztJQUM3QixRQUFRLEVBQUUsb0JBQW9CO0NBQzlCLENBQUMsRUFDRCxPQUFPLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUM3QixJQUFJLEVBQUUsMkJBQTJCO0lBQ2pDLEtBQUssRUFBRSwwQkFBMEI7Q0FDakMsQ0FBQyxDQUFDO0FBR0osUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDcEMsTUFBTSxZQUFZLEdBQWlCO1FBQ2xDLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsT0FBTyxFQUFFO1lBQ1I7Z0JBQ0MsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLEdBQUcsRUFBRSwwQkFBMEI7YUFDL0I7U0FDRDtLQUNELENBQUM7SUFHRixJQUFJLFFBQVEsQ0FBQyxLQUFLLElBQUksNEJBQTRCLEVBQUU7UUFDbkQsWUFBWSxDQUFDLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQztLQUNoRDtTQUFNO1FBQ04sSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUMsV0FBVyxLQUFLLEVBQUUsRUFBRTtZQUM1RSxZQUFZLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxXQUFXLENBQUM7U0FDdEY7YUFDSTtZQUNKLFlBQVksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDakQsWUFBWSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztZQUMxQyxZQUFZLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUN2QyxZQUFZLENBQUMsY0FBYyxHQUFHLGNB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