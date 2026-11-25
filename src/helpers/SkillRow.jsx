
import React, { memo } from "react";
import { Box } from "@mui/material";
import TechIcon from "./Techicon";

const SkillRow = memo(({ skills, direction = "left" }) => {
  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          width: "max-content",
          animation: `${
            direction === "left" ? "marqueeLeft" : "marqueeRight"
          } 25s linear infinite`,
          willChange: "transform",

          "@keyframes marqueeLeft": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },

          "@keyframes marqueeRight": {
            "0%": { transform: "translateX(-50%)" },
            "100%": { transform: "translateX(0)" },
          },

          "&:hover": {
            animationPlayState: "paused",
          },
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <Box
            key={`${skill.name}-${index}`}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              bgcolor: "#11131A",
              border: "1px dashed #363636",
              borderRadius: "6px",
              px: "10px",
              py: "6px",
              color: "#FAFAFA",
              whiteSpace: "nowrap",
              fontSize: "0.875rem",
              flexShrink: 0,
              transition: "border-color 0.2s",
              "&:hover": {
                borderColor: "#FAFAFA",
              },
            }}
          >
            <TechIcon item={skill} sx={{ width: 16, height: 16 }} />
            {skill.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
});

SkillRow.displayName = "SkillRow";

export default SkillRow;
