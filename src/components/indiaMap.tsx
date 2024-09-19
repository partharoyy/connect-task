import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import INDIA_TOPO_JSON from "../../public/data/india_states.json";

// Mapping between state names and sector colors (in lowercase, no spaces)
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
  jammu: "#FF847C", // Color for Jammu
  kashmir: "#165DC9", // Color for Kashmir
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
        scale: 1000, // Control zoom level
        center: [78.9629, 22.5937], // Center the map over India
      }}
      width={700}
      height={800}
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={INDIA_TOPO_JSON}>
        {({ geographies }) =>
          geographies.map((geo) => {
            // Normalize state name: remove spaces, replace "&" with "and", convert to lowercase
            let stateName = geo.properties.ST_NM.replace(/\s+/g, "") // Remove all spaces
              .replace(/&/g, "and") // Replace & with "and"
              .toLowerCase(); // Convert to lowercase

            // Special case: If the state is "Jammu & Kashmir", color Jammu and Kashmir differently
            if (stateName === "jammuandkashmir") {
              const isJammu = geo.properties.ST_NM.includes("Jammu");
              stateName = isJammu ? "jammu" : "kashmir";
            }

            const fillColor = stateToSectorColorMap[stateName] || "#D6D6DA"; // Default color if not mapped
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
