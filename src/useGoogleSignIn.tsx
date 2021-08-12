import { useState } from "react";

type Context = "use" | "signin" | "signup";

type UxMode = "popup" | "redirect";

// The following descriptions are taken from the docs
type Props = {
  /*
   This field is your application's client ID, which is found and created in the Google Developers Console
   */
  clientId: string;

  /*
  This field determines if an ID token is automatically returned without any
  user interaction when there's only one Google session that has approved your app before.
  The default value is false
   */
  autoSelect: boolean;

  /*
  This attribute is the URI of your login endpoint.
  May be omitted if the current page is your login page, in which case the credential is posted to this page by default.
  The ID token credential response is posted to your login endpoint when a user clicks on
  the Sign In With Google button and redirect UX mode is used.
   */
  loginUri?: string;

  /*
  This field is the name of the JavaScript function that
  handles the password credential returned from the browser's native credential manager.
   */
  nativeCallback?: (credential) => void;

  /*
  This field sets whether or not to cancel the One Tap request if a user clicks outside the prompt.
  The default value is true. You can disable it if you set the value to false.
   */
  cancelOnTapOutside: boolean;

  /*
  This field is the JavaScript function that handles the ID token returned from the One Tap prompt or the pop-up window.
  This attribute is required if Google One Tap or the Sign In With Google button popup UX mode is used.
   */
  onSuccess: (authResponse) => void;

  /*
  Runs when an error occurs in the authentication process
   */
  onError: (err) => void;

  /*
  Is called with the DOMEvent after the google sign in script is loaded into the browser
   */
  onScriptLoad?: (event) => void;

  /*
  Is called with the DOMEvent if there was an error loading the Google Sign In script
   */
  onScriptError?: (event) => void;

  /*
  This field changes the text of the title and messages in the One Tap prompt.
   */
  context?: Context;

  /*
  This attribute sets the DOM ID of the container element.
  If it's not set, the One Tap prompt is displayed in the top-right corner of the window.
   */
  promptParentId?: string;

  /*
  This field is a random string used by the ID token to prevent replay attacks
   */
  nonce?: string;

  /*
  If you need to display One Tap in the parent domain and its subdomains,
  pass the parent domain to this field so that a single shared-state cookie is used.
   */
  stateCookieDomain?: string;

  /*
  Use this field to set the UX flow used by the Sign In With Google button. The default value is popup.
  This attribute has no impact on the OneTap UX.
   */
  uxMode: UxMode;

  /*
  The origins that are allowed to embed the intermediate iframe.
  One Tap will run in the intermediate iframe mode if this field presents.
   */
  allowedParentOrigin: string | Array<string>;

  /*
  Overrides the default intermediate iframe behavior when users manually close One Tap
  by tapping on the 'X' button in the One Tap UI.
  The default behavior is to remove the intermediate iframe from the DOM immediately.

  The intermediateIframeCloseCallback field takes effect only in intermediate iframe mode.
  And it has impact only to the intermediate iframe, instead of the One Tap iframe.
  The One Tap UI is removed before the callback is invoked.
   */
  intermediateIframeCloseCallback?: (response) => void;
};

export default function useGoogleSignIn({ clientId }: Props) {}
