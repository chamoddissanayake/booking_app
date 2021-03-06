import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { FontAwesome } from "@expo/vector-icons";
export default function Card({
  rowMode,
  image,
  label,
  title,
  subTitle,
  price,
  rating,
  reviews,
  height,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: rowMode ? "row" : "column",
          minHeight: 100,
          height: height,
        },
      ]}
    >
      {image && (
        <ImageBackground
          source={image}
          style={[
            styles.img,
            { height: rowMode ? "100%" : 229 },
            { width: rowMode ? 50 : "100%" },
          ]}
        >
          {label && <AppText style={styles.label}>{label}</AppText>}
        </ImageBackground>
      )}
      {(title || price || subTitle) && (
        <View style={[styles.details, { width: rowMode ? "50%" : "100%" }]}>
          {price && (
            <AppText
              style={{
                color: colors.secondary,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Price : LKR {price}
            </AppText>
          )}
          {title && (
            <AppText style={{ fontWeight: "bold", paddingVertical: 5 }}>
              {title}
            </AppText>
          )}
          {subTitle && (
            <AppText style={{ fontSize: 16, paddingVertical: 5 }}>
              {subTitle}
            </AppText>
          )}
          <View
            style={[
              styles.feedback,
              { display: "flex", flexDirection: rowMode ? "column" : "row" },
            ]}
          >
            {reviews && (
              <AppText
                style={{
                  fontSize: 14,
                  color: colors.secondary,
                  paddingVertical: 5,
                }}
              >
                {reviews} Reviews
              </AppText>
            )}
            {rating && (
              <View
                style={{
                  marginVertical: rowMode && 5,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: rowMode ? 120 : 180,
                }}
              >
                <FontAwesome
                  name='star'
                  size={rowMode ? 14 : 22}
                  color='#FFC911'
                  style={{ marginVertical: 2 }}
                />
                <FontAwesome
                  name='star'
                  size={rowMode ? 14 : 22}
                  color='#FFC911'
                  style={{ marginVertical: 2 }}
                />
                <FontAwesome
                  name='star'
                  size={rowMode ? 14 : 22}
                  color='#FFC911'
                  style={{ marginVertical: 2 }}
                />
                <FontAwesome
                  name='star'
                  size={rowMode ? 14 : 22}
                  color='#FFC911'
                  style={{ marginVertical: 2 }}
                />
                <FontAwesome
                  name='star'
                  size={rowMode ? 14 : 22}
                  color='#FFC911'
                  style={{ marginVertical: 2 }}
                />
                <AppText
                  style={{
                    fontSize: 20,
                    backgroundColor: colors.primary,
                    color: colors.light,
                    textAlign: "center",
                    paddingHorizontal: 5,
                    borderRadius: 5,
                    marginBottom: 10,
                  }}
                >
                  {rating}
                </AppText>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.light,
    flex: 1,
    padding: 3,
    borderRadius: 3,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  label: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    width: 150,
    borderRadius: 15,
    color: colors.white,
    textAlign: "center",
  },
  details: {
    display: "flex",
    padding: 10,
  },
  feedback: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
