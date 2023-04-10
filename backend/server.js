import chalk from "chalk";
import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { morganMiddleware, systemLogs } from "./utils/Logger.js";

const app = express();

// serve frontend
if (process.env.NODE_ENV === "production") {
	app.use(morgan("dev"))
}

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use(cookieParser());

app.use(morganMiddleware);

app.get("/api/v1/test", (req,res) =>{
    res.json({HI:"welcome to the invoice app"})
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(
		`${chalk.green.bold("✔")} 👍 Server running in ${chalk.yellow.bold(
			process.env.NODE_ENV
		)} mode on port ${chalk.blue.bold(PORT)}`
	);
	systemLogs.info(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	);
});

process.on("uncaughtException", (err) => {
	console.error("Uncaught Exception:", err);
	process.exit(1);
  });
  
  process.on("unhandledRejection", (reason, promise) => {
	console.error("Unhandled Rejection at:", promise, "reason:", reason);
	process.exit(1);
  });
  