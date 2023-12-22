type PrependNextNum<A extends Array<unknown>> = A["length"] extends infer T
  ? ((t: T, ...a: A) => void) extends (...x: infer X) => void
    ? X
    : never
  : never;
type EnumerateInternal<A extends Array<unknown>, N extends number> = {
  0: A;
  1: EnumerateInternal<PrependNextNum<A>, N>;
}[N extends A["length"] ? 0 : 1];
export type Enumerate<N extends number> = EnumerateInternal<[], N> extends (infer E)[] ? E : never;
export type Range<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>>;

type YearType = 2023 | 2024 | 2025 | 2026;
type MonthType = Range<1, 13>;
type DayType = Range<1, 32>;

export type TodoType = {
  /**
   * uuid를 사용하여 얻은 id
   */
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  /**
   * deadLine = "YYYY-MM-DD"
   */
  deadLine: `${YearType}-${MonthType}-${DayType}`;
};

export type TodoLogType = {
  method: "create" | "update" | "delete";
  todo: TodoType;
  /**
   * timeStemp = Date.now()
   */
  timeStemp: number;
};
