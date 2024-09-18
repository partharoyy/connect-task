import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import INDIA_TOPO_JSON from "../../public/data/india_states.json";

// Mapping between state names and sector colors (in lowercase, no spaces)
const stateToSectorColorMap: Record<string, string> = {
  andhrapradesh: "#F78DA7",
  arunachalpradesh: "#2F80ED",
  assam: "#43E7C9",
  bihar: "#F7C6EC",
  chhattisgarh: "#6D28D9",
  goa: "#F3A712",
  gujarat: "#2F80ED",
  haryana: "#F78DA7",
  himachalpradesh: "#43E7C9",
  jammu: "#F78DA7", // Color for Jammu
  kashmir: "#2F80ED", // Color for Kashmir
  jharkhand: "#F7C6EC",
  karnataka: "#F7C6EC",
  kerala: "#43E7C9",
  madhyapradesh: "#6D28D9",
  maharashtra: "#F78DA7",
  manipur: "#F3A712",
  meghalaya: "#2F80ED",
  mizoram: "#43E7C9",
  nagaland: "#F7C6EC",
  odisha: "#6D28D9",
  punjab: "#F3A712",
  rajasthan: "#2F80ED",
  sikkim: "#F78DA7",
  tamilnadu: "#6D28D9",
  telangana: "#F7C6EC",
  tripura: "#43E7C9",
  uttarpradesh: "#2F80ED",
  uttarakhand: "#F3A712",
  westbengal: "#6D28D9",
};

const IndiaMap = () => {
  return (
    <ComposableMap
      projection='geoMercator'
      projectionConfig={{
        scale: 1000, // Control zoom level
        center: [78.9629, 22.5937], // Center the map over India
      }}
      width={800}
      height={600}
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
