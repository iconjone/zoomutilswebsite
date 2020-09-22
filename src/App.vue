<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Zoom Utils Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="55"
        /><v-toolbar-title>Zoom Utils</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-dialog v-model="teamDialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <span class="mr-2">Join the Team</span>
            <v-icon>mdi-account-group</v-icon>
          </v-btn>
        </template>
        <ValidationObserver
          ref="observer"
          v-slot="{ invalid }"
          tag="form"
          @submit.prevent="submit()"
        >
          <v-card>
            <v-card-title>
              <span class="headline">Join the team</span>
            </v-card-title>
            <v-card-subtitle>
              Zoom Utils is a growing company and is unable to provide paid
              positions at this time.
            </v-card-subtitle>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <ValidationProvider
                      name="Name"
                      rules="required"
                      v-slot="{ errors, validator }"
                    >
                      <v-text-field
                        label="Name*"
                        v-model="name"
                        :error-messages="errors"
                        :success="validator"
                        hint="First and Last name"
                        persistent-hint
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <ValidationProvider
                      name="Contact Number"
                      rules="required|numeric"
                      v-slot="{ errors, validator }"
                    >
                      <v-text-field
                        label="Contact Number*"
                        v-model="number"
                        :error-messages="errors"
                        :success="validator"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <ValidationProvider
                      name="Email"
                      rules="required|email"
                      v-slot="{ errors, validator }"
                    >
                      <v-text-field
                        label="Email*"
                        v-model="email"
                        type="email"
                        :error-messages="errors"
                        :success="validator"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <ValidationProvider
                      name="Preffered Method of Contact"
                      rules="required"
                      v-slot="{ errors, validator }"
                    >
                      <p>Preffered Method of Contact</p>
                      <v-radio-group
                        v-model="prefContact"
                        :error-messages="errors"
                        :success="validator"
                        row
                      >
                        <v-radio label="Phone" value="Phone"></v-radio>
                        <v-radio label="Email" value="Email"></v-radio>
                      </v-radio-group>
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="12">
                    <ValidationProvider
                      name="College/University"
                      rules="required"
                      v-slot="{ errors, validator }"
                    >
                      <v-text-field
                        label="College or University you attend*"
                        v-model="college"
                        hint="Write N/A if you are not attending a college/university"
                        persistent-hint
                        :error-messages="errors"
                        :success="validator"
                        required
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="12">
                    <ValidationProvider
                      name="Previous Experience"
                      rules="required"
                      v-slot="{ errors, validator }"
                    >
                      <v-textarea
                        name="input-7-1"
                        label="Previous Experience *"
                        v-model="priorExp"
                        hint="LinkedIn, Prior Volunteering, Jobs, etc."
                        persistent-hint
                        :error-messages="errors"
                        :success="validator"
                      ></v-textarea> </ValidationProvider></v-col
                  ><v-col cols="12">
                    <ValidationProvider
                      name="Corona Response"
                      rules="required"
                      v-slot="{ errors, validator }"
                    >
                      <v-textarea
                        name="input-7-1"
                        label="Corona response for yourself and your community. *"
                        v-model="coronaResp"
                        hint="As Corona has displaced the usual way of life and college, what steps have you been taking to ease the transition for yourself and/or your surrounding community?"
                        persistent-hint
                        :error-messages="errors"
                        :success="validator"
                      ></v-textarea>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <ValidationProvider
                      name="Preferred Position"
                      rules="required"
                      v-slot="{ errors, validator }"
                    >
                      <v-autocomplete
                        :items="[
                          'Marketing',
                          'Business Strategist',
                          'Developer',
                          'Graphic Design'
                        ]"
                        label="Preferred Position*"
                        v-model="prefPosition"
                        :error-messages="errors"
                        :success="validator"
                      ></v-autocomplete>
                    </ValidationProvider>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" text @click="teamDialog = false"
                >Cancel</v-btn
              >
              <v-btn
                color="success"
                text
                @click="joinSubmit()"
                :disabled="invalid"
                >Send</v-btn
              >
            </v-card-actions>
          </v-card>
        </ValidationObserver>
      </v-dialog>
      <!--https://docs.google.com/forms/u/0/d/e/1FAIpQLSdqY6dY72wAopwidrQbOITC4T2s_XK42aK-lKPyrS16RhDzrQ/formResponse?entry.1126138511=Name&entry.592236887=512203&entry.1708015369=jone@bal.df&entry.902318944=Phone&entry.708618278=sdf&entry.1572592481=sdf&entry.444364989=sdf&entry.1035500498=Marketing -->
    </v-app-bar>
    <div class="waves"></div>

    <v-main>
      <router-view />
    </v-main>
    <v-snackbar v-model="alert" :multi-line="true" timeout="7500">
      {{ alertText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="alert = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
// import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
// extend("required", required);

export default {
  name: "App",

  components: {},
  created() {
    if (this.$route.path == "/join") this.teamDialog = true;
  },
  methods: {
    joinSubmit() {
      var vueApp = this;
      fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdqY6dY72wAopwidrQbOITC4T2s_XK42aK-lKPyrS16RhDzrQ/formResponse?entry.1126138511=" +
          this.name +
          "&entry.592236887=" +
          this.number +
          "&entry.1708015369=" +
          this.email +
          "&entry.902318944=" +
          this.prefContact +
          "&entry.708618278=" +
          this.college +
          "&entry.1572592481=" +
          this.priorExp +
          "&entry.444364989=" +
          this.coronaResp +
          "&entry.1035500498=" +
          this.prefPosition,
        { mode: "no-cors", method: "POST" }
      ).then(function(response) {
        console.log(response);
        vueApp.teamDialog = false;
        vueApp.customAlert(
          "Thank you for your submission " +
            vueApp.name +
            "! We will be in contact soon."
        );
      });
    },
    customAlert(msg) {
      this.alertText = msg;
      this.alert = true;
    }
  },

  data: () => ({
    //
    teamDialog: false,
    invalid: null,
    valid: false,
    name: null,
    number: null,
    email: null,
    college: null,
    priorExp: null,
    prefContact: null,
    coronaResp: null,
    prefPosition: null,
    alert: false,
    alertText: "No Message"
  })
};
</script>
<style>
/* ========================= */
body {
  overflow-x: hidden !important;
}

@media only screen and (min-width: 1264px) {
  html,
  body {
    overflow: hidden !important;
  }
}

.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  /* background-color: #4973ff;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 500ms; */
}

.waves::before,
.waves::after {
  content: "";
  position: absolute;
  width: 260vw;
  height: 300vw;
  top: -65vw;
  left: 50%;
  transform: translate(-50%, -75%);
}

.waves::before {
  border-radius: 44%;
  background: #adb5bd;
  /* rgba(51, 51, 51, 1); */
  animation: waves 8s linear infinite;
}

.waves::after {
  border-radius: 44%;
  background: #004785;
  /* rgba(51, 51, 51, 0.5); */
  animation: waves 15s linear infinite;
}

@keyframes waves {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
