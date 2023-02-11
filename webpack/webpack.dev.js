import webpack from "webpack";
export const config = {
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.environment": JSON.stringify("development"),
    }),
  ],
};
