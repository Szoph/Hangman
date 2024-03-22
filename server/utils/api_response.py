class ApiResponse:
    def __init__(self, success: bool, data: any = "",  error: str = ""):
        self.success = success
        self.data = data
        self.error = error

    def __repr__(self):
        return f"ApiResponse(success={self.success}, data={self.data}, error={self.error})"