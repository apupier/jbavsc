import { window, ExtensionContext } from "vscode";
import State from "./configState";

export function confirmAndGen(
	genFunction: Function,
	context: ExtensionContext,
	confState?: State
) {
	window
		.showInformationMessage(
			"About to generate your app. Please confirm.",
			{ modal: true },
			"Yes, generate!"
		)
		.then(answer => {
			if (answer === "Do it!") {
				try {
					if (confState) {
						genFunction(context, confState);
					} else {
						genFunction(context);
					}
					window.showInformationMessage(
						"Successfully generated your jBPM Business Application"
					);
				} catch (e) {
					window.showInformationMessage(
						`Error generating your jBPM Business Application: ${e}`
					);
				}
			}
		});
}
