
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { LayoutGrid, List } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SkillRow from "../helpers/SkillRow";
import TechIcon from "../helpers/Techicon";

import {
  frontendSkills,
  backendSkills,
  toolsSkills,
} from "../data/tech";

const Competence = () => {
  const [isInline, setIsInline] = useState(true);

  const skillRows = [
    { items: frontendSkills, direction: "left" },
    { items: backendSkills, direction: "right" },
    { items: toolsSkills, direction: "left" },
  ];

  return (
    
    <Box
      component="section"
      id="skills"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        mb: 8,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            background:
              "linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Technologies
        </Typography>

        <Box
          component="button"
          onClick={() => setIsInline((prev) => !prev)}
          title={isInline ? "Show animated rows" : "Show inline"}
          aria-label="Toggle inline view"
          sx={{
            display: "flex",
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1.5,
            border: "1px dashed",
            borderColor: "divider",
            bgcolor: "rgba(26, 40, 71, 0.5)",
            color: "#ff8a65",
            cursor: "pointer",
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: "action.hover",
              color: "text.primary",
            },
          }}
        >
          {isInline ? <LayoutGrid size={20} /> : <List size={20} />}
        </Box>
      </Box>

      {/* Inline / Animated */}
      {isInline ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {skillRows.map((row, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {row.items.map((skill) => (
                <Box
                  key={skill.name}
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
                    fontSize: "0.875rem",
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
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            "&::before": {
              content: '""',
              position: "absolute",
              inset: "0 auto 0 0",
              width: 40,
              zIndex: 2,
              pointerEvents: "none",
              
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: "0 0 0 auto",
              width: 40,
              zIndex: 2,
              pointerEvents: "none",
            },
          }}
        >
          {skillRows.map((row, index) => (
            <SkillRow
              key={index}
              skills={row.items}
              direction={row.direction}
            />
          ))}
        </Box>
      )}
    </Box>
    
  );
};

export default Competence;
