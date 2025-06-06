import { ChildProcessWithoutNullStreams } from "child_process";

export type NotifyOnMedium = "SLACK" | "DISCORD" | "CUSTOM";

export type ConfigType = {
  name: string;
  host: string;
  db_name: string;
  user: string;
  password: string;
  type: "postgres" | "mysql" |"mongo";
  port: number;
};

export interface DumpType {
  databaseName: string;
  dumpedContent: ChildProcessWithoutNullStreams;
}

export type DumpInfo = {
  databaseName: string;
  compressedFilePath: string;
  databaseType: string;
  dumpFilePath: string;
  dumpFileName: string;
};
