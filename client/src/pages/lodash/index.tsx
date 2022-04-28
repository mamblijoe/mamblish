import type { NextPage } from "next";
import MainLayout from "@/layouts/main-layout";
import { useEffect } from "react";
import * as _ from "lodash";

const LodashPage: NextPage = () => {
    useEffect(() => {
        //--------------------CLONE DEEP-------------------------
        const sourceForLodash = [
            {
                a: {
                    b: {
                        c: 2,
                        d: {
                            dd: 3,
                            ddd: {
                                cc: 222,
                                ccc: [1, 2, 3, { a: 2 }],
                            },
                        },
                    },
                },
            },
            { b: 2 },
        ];
        const sourceForSpread = [
            {
                a: {
                    b: {
                        c: 2,
                        d: {
                            dd: 3,
                            ddd: {
                                cc: 222,
                                ccc: [1, 2, 3, { a: 2 }],
                            },
                        },
                    },
                },
            },
            { b: 2 },
        ];
        // const lodashResult = _.cloneDeep(sourceForLodash);
        // const spreadResult = [...sourceForRest];
        // sourceForLodash[0].a.b.d.ddd.ccc[3].a = 0;
        // sourceForSpread[0].a.b.d.ddd.ccc[3].a = 0;
        //
        // console.log(
        //   "LODASH:::",
        //   lodashResult[0] === sourceForLodash[0],
        //   lodashResult[0].a.b.d.ddd.ccc[3].a,
        //   sourceForLodash[0].a.b.d.ddd.ccc[3].a
        // );
        // console.log(
        //   "REST:::",
        //   spreadResult[0] === sourceForSpread[0],
        //   spreadResult[0].a.b.d.ddd.ccc[3].a,
        //   sourceForSpread[0].a.b.d.ddd.ccc[3].a
        // );
        //--------------------MERGE-------------------------

        // const object = {
        //   a: [{ b: 2 }, { d: 4 }],
        // };
        //
        // const other = {
        //   a: [{ c: 3 }, { e: 5 }],
        // };
        //
        // const mergedLodash = _.merge(object, other);
        // const mergedSpread = { ...object, ...other };
        // console.log("LODASH:::", mergedLodash);
        // console.log("SPREAD:::", mergedSpread);

        //--------------------GROUP BY-------------------------

        // console.log("GROUP BY", _.groupBy(["asda", "ssssssssssss", 0], Boolean));
        // console.log("GROUP BY", _.groupBy(["asda", "ssssssssssss", 0], "length"));
        // console.log(
        //   "GROUP BY",
        //   _.groupBy(["asda", "ssssssssssss", 0], (item) => item !== "asda")
        // );

        //--------------------SORT-------------------------
        console.log("SORTED INDEX", _.sortedIndex([30, 50], 40));
        console.log(
            "SORTED INDEX BY",
            _.sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, "x")
        );
        console.log("SORTED LAST INDEX", _.sortedLastIndex([4, 5, 5, 5, 6], 5));

        console.log("UNIQUE", _.sortedUniq([6, 4, 5, 5, 5]));
        console.log("UNIQUE BY", _.sortedUniqBy([2.3, 1.2, 1.1, 2.4], Math.floor));
    }, []);
    return (
        <MainLayout>
            <div>
                <h2>Lodash</h2>
                <hr />
                <a
                    href="https://www.npmjs.com/search?q=keywords:lodash-modularized"
                    style={{ textDecoration: "underline" }}
                >
                    Lodash modularized
                </a>
            </div>
        </MainLayout>
    );
};

export default LodashPage;
