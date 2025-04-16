import { spawnDumpProcess } from ".";
import { ConfigType, DumpType } from "../@types/types";

export const handleMongodbsDump = (
  data: ConfigType,
  dumps: DumpType[]
): DumpType[] => {
  const dbNames = data.db_name.includes(",")
    ? data.db_name.split(",")
    : [data.db_name];

  dbNames.forEach((dbName) => {
    const args = [`--host=${data.host}`,
        `--port=${data.port}`,
        `--username=${data.user}`,
        `--password=${data.password}`,
        `--db=${dbName}`];
    // eslint-disable-next-line no-undef
    const env = { ...process.env };

    const dumpedData = spawnDumpProcess("mongodb_dump", args, env);
    dumps.push({ databaseName: dbName, dumpedContent: dumpedData });
  });
  return dumps;
};
