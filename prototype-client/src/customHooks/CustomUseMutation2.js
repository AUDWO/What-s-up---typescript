import { useMutation, useQueryClient } from "@tanstack/react-query";

const CustomUseMutation = (fn, queryKeyArr, callback) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: fn,
    onSuccess: (data) => {
      if (queryKeyArr.length) {
        queryKeyArr.forEach((queryKey) => {
          queryClient.removeQueries({ queryKey: [queryKey] });
        });
      }
      if (callback) {
        callback();
      }
    },
  });
  return { mutate, isPending, isSuccess };
};

export default CustomUseMutation;
