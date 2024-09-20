import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import INDIA_TOPO_JSON from "../../public/data/india_states.json";

const stateToSectorColorMap: Record<string, string> = {
  andhrapradesh: "#FF847C",
  arunachalpradesh: "#165DC9",
  assam: "#43E7C9",
  bihar: "#CD7ED9",
  chhattisgarh: "#722391",
  goa: "#165DC9",
  gujarat: "#165DC9",
  haryana: "#FF847C",
  himachalpradesh: "#43E7C9",
  jammu: "#FF847C",
  kashmir: "#165DC9",
  jharkhand: "#CD7ED9",
  karnataka: "#CD7ED9",
  kerala: "#43E7C9",
  madhyapradesh: "#722391",
  maharashtra: "#FF847C",
  manipur: "#F3A712",
  meghalaya: "#165DC9",
  mizoram: "#43E7C9",
  nagaland: "#CD7ED9",
  odisha: "#722391",
  punjab: "#F3A712",
  rajasthan: "#165DC9",
  sikkim: "#FF847C",
  tamilnadu: "##722391",
  telangana: "#CD7ED9",
  tripura: "#43E7C9",
  uttarpradesh: "#165DC9",
  uttarakhand: "#F3A712",
  westbengal: "#722391",
};

const IndiaMap = () => {
  return (
    <ComposableMap
      projection='geoMercator'
      projectionConfig={{
        scale: 1000,
        center: [78.9629, 22.5937],
      }}
      width={700}
      height={800}
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={INDIA_TOPO_JSON}>
        {({ geographies }) =>
          geographies.map((geo) => {
            let stateName = geo.properties.ST_NM.replace(/\s+/g, "").replace(/&/g, "and").toLowerCase();

            if (stateName === "jammuandkashmir") {
              const isJammu = geo.properties.ST_NM.includes("Jammu");
              stateName = isJammu ? "jammu" : "kashmir";
            }

            const fillColor = stateToSectorColorMap[stateName] || "#D6D6DA";
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: fillColor,
                    stroke: "#FFFFFF",
                    strokeWidth: 0.75,
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    stroke: "#FFFFFF",
                    strokeWidth: 1,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    stroke: "#FFFFFF",
                    strokeWidth: 1,
                    outline: "none",
                  },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default IndiaMap;
