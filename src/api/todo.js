import request from "@/utils/request";

export async function getTodos() {
  return request({
    url: "/todos",
    methods: "get",
    params: { limit: 5 },
  });
}

export function addTodo(data) {
  return request({
    url: "/todos",
    method: "post",
    data,
  });
}

export function deleteTodo(id) {
  return request({
    url: `/${id}`,
    method: "delete",
  });
}
