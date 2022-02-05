import * as React from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ModalYotube from "./videoModal";
import "./imageCardtest.css";

export default function ImgMediaCard() {
  return (
    <>
      <div className="white_svg svg_white">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,150 1655.167,310.5 2332.5,300 2920,198.5 2920,300 "></polygon>
        </svg>
      </div>

      <Grid
        sx={{ bgcolor: "#212529", gap: 3 }}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Card sx={{ maxWidth: 400, bgcolor: "#212529" }}>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small">
              <ModalYotube videoId="Ra3iG1k8wrM"/>
            </Button>
          </CardActions>
          <CardMedia
            component="img"
            alt=""
            height="340"
            width="500"
            image="/assets/thumbnails/fotbal.JPG"
          />
        </Card>
        <Card sx={{ maxWidth: 400, bgcolor: "#212529" }}>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small">
              <ModalYotube videoId="LNNYtBG2VhU"/>
            </Button>
          </CardActions>
          <CardMedia
            component="img"
            alt=""
            height="340"
            width="500"
            image="/assets/thumbnails/heaven.JPG"
          />
        </Card>
        <Card sx={{ maxWidth: 400, bgcolor: "#212529" }}>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small">
              <ModalYotube videoId="8kEBjMMGIVk"/>
            </Button>
          </CardActions>
          <CardMedia
            component="img"
            alt=""
            height="340"
            width="500"
            image="/assets/thumbnails/capra.JPG"
          />
        </Card>
      </Grid>

      <div className="white_svg svg_white">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,150 1655.167,290.5 2332.5,300 2920,198.5 2920,300 "></polygon>
        </svg>
      </div>
    </>
  );
}
