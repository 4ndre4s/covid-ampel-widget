<template>
  <div class="widget">
    <div v-if="loading">Daten werden geladen ...</div>
    <div v-if="error">{{ this.error }}</div>
    <div
      :class="color(item.attributes.cases7_per_100k)"
      v-for="(item, index) in data"
      :key="item.attributes.OBJECTID"
      :name="index"
      :object-id="item.attributes.OBJECTID"
      >
      <h3>{{ item.attributes.BEZ }} {{ item.attributes.GEN }}</h3>
      <p class="cases"> {{ rounded(item.attributes.cases7_per_100k) }}</p>
      <p><small>Fälle der letzten 7 Tage pro 100.000 Einwohner</small></p>
      <p>
        <small>Aktualisiert: {{ item.attributes.last_update }}</small>
      </p>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Widget',
  props: {
    // comma separated List of objectIds.
    // See: https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0
    objectId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
      error: false,
      data: null,
    }
  },
  created() {
    this.getData().then((data) => {
      this.data = data
      this.loaded = true
    })
  },
  methods: {
    async getData() {
      const url =
        'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=OBJECTID in (' +
        this.objectId +
        ')&outFields=objectId,death_rate,cases,deaths,cases_per_100k,cases_per_population,last_update,cases7_per_100k,EWZ,BEZ,GEN&returnGeometry=false&f=json'
      const httpClient = axios.create({
        baseURL: url,
        timeout: 10000, // indicates, 10000ms ie. 10 second
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const result = await httpClient.get()
      if (result.error) {
        console.error(result.error)
        this.error = 'Fehler beim Laden der Daten vom RKI-Server'
      } else {
        this.loading = false
      }
      return result.data.features
    },
    color(value) {
      let col = ""
      if (value < 35) {
        col = "widget-green"
      } else if (value >= 35 && value < 50) {
        col = "widget-yellow"
      } else if (value >= 50 && value < 100) {
        col = "widget-red"
      } else if (value >= 100) {
        col = "widget-darkred"
      }
      return col
    },
    rounded(value) {
      return Number(value.toFixed(1))
    }
  }
}
</script>

<style lang="css" scoped>
.widget {
  text-align: center;
  padding: 0;
}
.widget-green {
  background-color: rgba(2, 156, 2, 0.705);
}
.widget-yellow {
  background-color: rgb(255, 251, 0);
}
.widget-red {
  color: rgb(248, 214, 186);
  background-color: rgb(255, 36, 36);
}
.widget-darkred {
  color: rgba(255, 253, 253, 0.89);
  background-color: rgb(168, 4, 4);
}
.cases {
  font-size: 3em;
  font-weight: 700;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-align: center;
}
</style>