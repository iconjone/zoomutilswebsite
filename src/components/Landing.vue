<template>
  <v-container fluid>
    <v-row class="text-center" align="center" justify="center">
      <v-col class="mb-4" lg="6" cols="12">
        <h1 :class="displayValue" style="color:white;">
          The only way to <b class="font-weight-medium">keep track</b> of,
          <b class="font-weight-medium">notify</b>, and
          <b class="font-weight-medium">launch</b> your meetings, all in
          <b class="font-weight-medium">one</b>
          extension.
        </h1>
        <!-- class="shrink mr-2" -->
        <v-row align="center" justify="center">
          <v-col class="col-12 col-md-8">
            <v-img
              v-if="this.browserType == 'Microsoft Edge'"
              alt="Install
            Badge"
              contain
              src="../assets/badges/Microsoft Edge.png"
              @click="badgeClicked()"
              transition="scale-transition"
              width="450"
            />
            <v-img
              v-else-if="this.browserType == 'Firefox'"
              alt="Install
            Badge"
              contain
              src="../assets/badges/Firefox.png"
              @click="badgeClickedFF()"
              transition="scale-transition"
              width="350"
            />
            <v-img
              v-else
              alt="Install
            Badge"
              contain
              src="../assets/badges/Chrome.png"
              @click="badgeClicked()"
              transition="scale-transition"
              width="450"
            />
          </v-col>
          <v-col class="col-12 col-md-4">
            <v-btn transition="scale-transition" x-large :href="installLink">
              {{ installText }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="mb-4" lg="6" cols="12">
        <v-carousel cycle height="400" show-arrows-on-hover progress>
          <v-carousel-item src="../assets/Slides/1.jpg">
            <v-row class="fill-height" align="end" justify="center">
              <div
                class="display-1 mb-12"
                style="color:#adb5bd; text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;"
              >
                One-Click launch of your Zoom Meetings
              </div>
            </v-row>
          </v-carousel-item>
          <v-carousel-item src="../assets/Slides/2.jpg">
            <v-row class="fill-height" align="end" justify="center">
              <div
                class="display-1 mb-12"
                style="color:#adb5bd; text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;"
              >
                Receive notifications for your Meetings
              </div>
            </v-row>
          </v-carousel-item>
          <v-carousel-item src="../assets/Slides/3.jpg">
            <v-row class="fill-height" align="end" justify="center">
              <div
                class="display-1 mb-12"
                style="color:#adb5bd; text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;"
              >
                Easily Organize your Meetings
              </div>
            </v-row>
          </v-carousel-item>
          <v-carousel-item src="../assets/Slides/4.jpg">
            <v-row class="fill-height" align="end" justify="center">
              <div
                class="display-1 mb-12"
                style="color:#adb5bd; text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;"
              >
                Add Zoom link directly from a webpage
              </div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-divider class="d-none d-md-flex"></v-divider>
    <v-row align="center" justify="center" class="d-none d-md-flex mt-8">
      <h1 class="display-1" style="color:white;">
        As Seen On
      </h1>
    </v-row>
    <v-row align="center" justify="center" class="d-none d-md-flex  mt-4">
      <v-card
        class="mx-auto"
        color="primary"
        @click="
          openWindow(
            'https://www.kagstv.com/article/news/local/texas-am-student-creates-chrome-browser-extension-for-zoom-meetings/499-77d4de24-416e-4133-a2cc-1ec02168e15c'
          )
        "
      >
        <v-img
          src="../assets/AsSeenOn/kags.png"
          width="225px"
          class="ma-2"
        ></v-img>
      </v-card>

      <v-card
        class="mx-auto"
        color="primary"
        @click="
          openWindow(
            'https://www.thecrimson.com/flyby/article/2020/9/1/how-to-get-your-virtual-life-together/'
          )
        "
      >
        <v-img
          src="../assets/AsSeenOn/harvardcrimson.png"
          width="150px"
          class="ma-2"
        ></v-img>
      </v-card>

      <v-card
        class="mx-auto"
        color="primary"
        @click="
          openWindow(
            'https://www.fox7austin.com/news/central-texas-brothers-make-browser-extension-to-help-students-organize-keep-track-of-zoom-meetings'
          )
        "
      >
        <v-img
          src="../assets/AsSeenOn/fox7.svg"
          width="175px"
          class="ma-2"
        ></v-img>
      </v-card>

      <v-card
        class="mx-auto"
        color="primary"
        @click="
          openWindow(
            'https://engineering.tamu.edu/news/2020/08/student-creates-zoom-browser-extension-to-help-fellow-aggies.html'
          )
        "
      >
        <v-img
          src="../assets/AsSeenOn/tamuengr.svg"
          width="275px"
          class="ma-2"
        ></v-img>
      </v-card>

      <v-card
        class="mx-auto"
        color="primary"
        @click="
          openWindow(
            'https://www.kxxv.com/brazos/aggie-invents-browser-extension-to-make-accessing-zoom-meeting-information-easier'
          )
        "
      >
        <v-img
          src="../assets/AsSeenOn/25abc.png"
          width="175px"
          class="ma-2"
        ></v-img>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import Bowser from "bowser";

export default {
  name: "Landing",
  created() {
    console.log(this);
    const browser = Bowser.getParser(window.navigator.userAgent);
    this.platformType = browser.parsedResult.platform.type;
    this.browserType = browser.getBrowser().name;
  },
  methods: {
    badgeClicked() {
      window.open(
        "https://chrome.google.com/webstore/detail/hhhlbediooifeabnlleljnbddcelmdpm?ref=ZoomUtilsWebsite",
        "_self"
      );
    },
    badgeClickedFF() {
      window.open(
        "https://addons.mozilla.org/en-US/firefox/addon/zoom-utils?ref=ZoomUtilsWebsite",
        "_self"
      );
    },
    openWindow(link) {
      window.open(link, "_blank");
    }
  },
  computed: {
    displayValue() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "display-2";
      } else {
        return "display-1";
      }
    },
    installText() {
      if (this.platformType != "desktop") return "Install on Desktop";
      return "Install Now";
    },
    installLink() {
      if (this.browserType == "FireFox")
        return "https://addons.mozilla.org/en-US/firefox/addon/zoom-utils?ref=ZoomUtilsWebsite";
      else
        return "https://chrome.google.com/webstore/detail/hhhlbediooifeabnlleljnbddcelmdpm";
    }
  },

  data: () => ({
    browserType: "Chrome",
    platformType: "desktop",

    model: 0
  })
};
</script>
