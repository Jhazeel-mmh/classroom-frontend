import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";
import { Subject } from "@/types";
// import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
// import { API_URL } from "./constants";
// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description: "An introduction to programming, algorithms, and computational thinking.",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Linear Algebra",
    department: "Math",
    description: "Vectors, matrices, linear transformations, and their applications.",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: 3,
    code: "ENG105",
    name: "Academic Writing",
    department: "English",
    description: "Research, composition, and revision techniques for university writing.",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
];


export const dataProvider: DataProvider = {
  /**
   * Resolves to all mock subjects for the `subjects` resource and an empty
   * result for other resources. Pagination, filters, and sorters are ignored.
   */
  getList: async <TData extends BaseRecord = BaseRecord>({ resource }:
    GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    }
  },
  /** Always rejects with an `Error` because single-record retrieval is not implemented. */
  getOne: async () => { throw new Error("This function is not implemented yet.") },
  /** Always rejects with an `Error` because record creation is not implemented. */
  create: async () => { throw new Error("This function is not implemented yet.") },
  /** Always rejects with an `Error` because record updates are not implemented. */
  update: async () => { throw new Error("This function is not implemented yet.") },
  /** Always rejects with an `Error` because record deletion is not implemented. */
  deleteOne: async () => { throw new Error("This function is not implemented yet.") },
  /** Returns an empty API URL because this provider uses in-memory mock data. */
  getApiUrl: () => '',
}