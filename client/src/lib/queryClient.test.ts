import { ApiError, getErrorMessage } from "./queryClient";

describe("Error handling", () => {
  describe("getErrorMessage", () => {
    it("should return specific message for 400", () => {
      const error = new ApiError(400, "Bad request");
      expect(getErrorMessage(error)).toBe("요청이 올바르지 않습니다");
    });

    it("should return specific message for 401", () => {
      const error = new ApiError(401, "Unauthorized");
      expect(getErrorMessage(error)).toBe("인증이 필요합니다");
    });

    it("should return specific message for 403", () => {
      const error = new ApiError(403, "Forbidden");
      expect(getErrorMessage(error)).toBe("권한이 없습니다");
    });

    it("should return specific message for 404", () => {
      const error = new ApiError(404, "Not found");
      expect(getErrorMessage(error)).toBe("찾을 수 없습니다");
    });

    it("should return specific message for 409", () => {
      const error = new ApiError(409, "Conflict");
      expect(getErrorMessage(error)).toBe("충돌이 발생했습니다. 다시 시도해주세요");
    });

    it("should return specific message for 500", () => {
      const error = new ApiError(500, "Server error");
      expect(getErrorMessage(error)).toBe("서버 오류가 발생했습니다");
    });

    it("should handle network errors", () => {
      const error = new Error("fetch failed");
      expect(getErrorMessage(error)).toContain("네트워크");
    });

    it("should handle unknown errors", () => {
      expect(getErrorMessage(null)).toBe("알 수 없는 오류가 발생했습니다");
    });
  });
});
