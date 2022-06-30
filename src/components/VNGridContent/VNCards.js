import React, { useState } from "react";

import { Grid } from "@mui/material";
import {
  Card,
  Image,
  Modal,
  Skeleton,
  Space,
  Text,
} from "@mantine/core";

import { motion } from "framer-motion/dist/framer-motion";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./VNCards.css";

const cardStyle = {
  shadow: "md",
  p: "lg",
  style: {
    height: "465px",
    width: "300px",
  },
};

const gridItemHover = {
  whileHover: {
    scale: 1,
    zIndex: 5,
  },
};

const VNCards = (userNovels, color) => {
  const vndata = userNovels.userNovels;

  const [modal, showModal] = useState(false);
  const enableModal = () => showModal(true);
  const disableModal = () => showModal(false);

  const [loadingImage, setLoadingImage] = useState(true);
  const removeSkeleton = () => {
    setLoadingImage(false);
  };

  const slideImages = [];

  for (let i = 0; i < vndata.screens.length; i++) {
    let entry = {
      url: vndata.screens[i],
    };
    slideImages.push(entry);
  }

  return (
    <>
      <Modal
        opened={modal}
        onClose={disableModal}
        title={vndata.title}
        size="calc(100vw - 40%)"
      >
        <Swiper
          autoHeight={true}
          navigation={true}
          effect="fade"
          loop={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
        >
          {slideImages.map((currentImage, pos) => {
            return (
              <SwiperSlide key={pos}>
                <div
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {loadingImage ? <Skeleton height="600px" /> : null}
                  
                  <Image
                    src={currentImage.url}
                    radius="lg"
                    style={{ cursor: "pointer" }}
                    onLoad={removeSkeleton}
                  />

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Modal>


      <Grid item component={motion.div} {...gridItemHover}>
        <Card {...cardStyle} onClick={enableModal}>
          <Card.Section>
            <Image
              src={vndata.image_flag > 1 ? null : vndata.image}
              height={400}
              alt="With default placeholder"
            />
          </Card.Section>

          <Space h="md" />

          <Card.Section>
            <Text
              size="md"
              align="center"
              style={{ color: { color }, lineHeight: 1.5 }}
            >
              {vndata.title}
            </Text>
          </Card.Section>
        </Card>
      </Grid>
    </>
  );
};

export default VNCards;
