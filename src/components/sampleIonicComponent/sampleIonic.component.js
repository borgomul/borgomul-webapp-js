import React from "react";
import "./sampleIonic.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet
} from "@ionic/react";

const SampleIonicComponent = () => (
  <IonApp>
    <IonMenu contentId="menu" side="start" menuId="first">
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>বর্গমূল</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>ব্লগ</IonItem>
          <IonItem>বর্গক্ষেত্র</IonItem>
          <IonItem>লার্নিং</IonItem>
          <IonItem>ম্যাগাজিন</IonItem>
          <IonItem>লগ ইন</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonRouterOutlet id="menu">
      <div className="content-wrapper">
        <div className="content">
          স্ক্রীনের বাম প্রান্ত থেকে ডানে সোয়াইপ করলে কিসসু হবেনা!
        </div>
      </div>
    </IonRouterOutlet>
  </IonApp>
);
export { SampleIonicComponent };
