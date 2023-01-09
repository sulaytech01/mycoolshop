import apiClient from "../libs/apiClient";

export function getAllProducts() {
  return apiClient.get("products");
}

export function getFeaturedProducts() {
  return apiClient.get("featured");
}
