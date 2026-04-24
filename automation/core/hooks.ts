import { BeforeScenario, AfterScenario } from "@getgauge/ts";
import { world } from "./world";

BeforeScenario(async () => {
  await world.init();
});

AfterScenario(async () => {
  await world.dispose();
});
