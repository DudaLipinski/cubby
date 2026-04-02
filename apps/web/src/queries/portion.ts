import { mutationOptions, queryOptions } from "@tanstack/react-query";
import { apiClient, type CreatePortionBody } from "@cube-prep/api-client";

export const portionsQueryOptions = queryOptions({
  queryKey: ["portions"],
  queryFn: async () => {
    const { data } = await apiClient.GET("/portion");

    if (!data) {
      throw new Error("Could not load portions.");
    }

    return data;
  },
});

export const portionsMutationOptions = mutationOptions({
  mutationKey: ["create-portion"],
  mutationFn: async (payload: CreatePortionBody) => {
    const { data } = await apiClient.POST("/portion", {
      body: payload,
    });

    if (!data) {
      throw new Error("Could not create portion.");
    }

    return data;
  },
});
