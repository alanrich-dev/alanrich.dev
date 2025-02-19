import React from "react";
import {
  Typography,
  Box,
  Modal,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import Layout from "../../ReuseableComponents/Layout";
import InterestsList from "./Content/InterestsList";
import Recommendations from "./Content/Recommendations";
import PhotoGallery from "./Content/PhotoGallery";
import TranslationButton from "../../ReuseableComponents/TranslationButton";

function PersonalInterests({
  theme,
  language,
  personalInterestsContent,
  personalInterestsItemized,
  recommendations,
  personalPhotos,
  handleToggleLanguage,
  handleOpenModal,
  openModal,
  handleCloseModal,
  modalImage,
  selectedItem,
}) {
  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          paddingTop: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <TranslationButton
          language={language}
          handleToggleLanguage={handleToggleLanguage}
        />

        {/* Heading and Subheading */}
        <Box mb={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.secondary,
              paddingTop: { xs: 4, sm: 4, md: 4 },
            }}
          >
            {personalInterestsContent[language].heading}
          </Typography>

          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              color: theme.palette.primary.main,
            }}
          >
            {personalInterestsContent[language].subheading}
          </Typography>
        </Box>

        {/* Introduction Text */}
        <Box mb={4}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "300px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <CardContent
              sx={{
                pt: 0,
                pb: 0,
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: theme.palette.grey[700] }}
                dangerouslySetInnerHTML={{
                  __html: personalInterestsContent[language].introduction,
                }}
              />
            </CardContent>
          </Card>
        </Box>

        {/* Interests List */}
        <InterestsList
          language={language}
          personalInterestsContent={personalInterestsContent}
          personalInterestsItemized={personalInterestsItemized}
        />

        {/* Photo Gallery */}
        <PhotoGallery
          personalPhotos={personalPhotos}
          language={language}
          handleOpenModal={handleOpenModal}
        />

        {/* Modal for Image */}
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 2,
              maxWidth: "80%",
              maxHeight: "80%",
              overflow: "hidden",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: theme.palette.common.white,
              }}
            >
              <CloseIcon />
            </IconButton>
            {modalImage && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={modalImage}
                  alt="Modal"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "60vh",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            )}
            <Typography
              variant="subtitle1"
              component="h2"
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "12px",
                minHeight: "28px",
              }}
            >
              {selectedItem &&
                (language === "en"
                  ? selectedItem.titleEn
                  : selectedItem.titleFr)}
            </Typography>
          </Box>
        </Modal>

        {/* Recommendations Section */}
        <Recommendations
          recommendations={recommendations}
          language={language}
        />
      </Box>
    </Layout>
  );
}

export default PersonalInterests;
