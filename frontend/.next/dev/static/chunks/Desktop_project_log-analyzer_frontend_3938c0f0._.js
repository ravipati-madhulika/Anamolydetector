(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/project/log-analyzer/frontend/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/project/log-analyzer/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/log-analyzer/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.Next_public_url || "http://localhost:8000"
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecentAnomalies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/log-analyzer/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/log-analyzer/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/log-analyzer/frontend/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RecentAnomalies() {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecentAnomalies.useEffect": ()=>{
            const fetchAnomalies = {
                "RecentAnomalies.useEffect.fetchAnomalies": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/anomalies");
                        // HARD GUARD — backend must return array
                        const data = Array.isArray(res.data) ? res.data : [];
                        setItems(data.slice(0, 8));
                    } catch (err) {
                        console.error("Failed to load anomalies", err);
                        setError("Failed to load anomalies");
                    } finally{
                        setLoading(false);
                    }
                }
            }["RecentAnomalies.useEffect.fetchAnomalies"];
            fetchAnomalies();
        }
    }["RecentAnomalies.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-sm p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-medium text-gray-600 mb-4",
                children: "Recent Anomalies"
            }, void 0, false, {
                fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-400",
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            !loading && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            !loading && !error && items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-400",
                children: "No anomalies found"
            }, void 0, false, {
                fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this),
            !loading && !error && items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "text-left text-gray-500 border-b",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "pb-2",
                                        children: "Time"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "pb-2",
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "pb-2",
                                        children: "Severity"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "pb-2",
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: items.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b last:border-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-2 text-gray-400",
                                            children: new Date(a.timestamp).toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-2",
                                            children: a.type
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `py-2 font-medium ${severityColor(a.severity)}`,
                                            children: a.severity
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-2 text-gray-500 truncate max-w-[300px]",
                                            children: a.message || "-"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, a.id, true, {
                                    fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(RecentAnomalies, "z5ZWTe/mcVbeY/KxLxi/073fFbc=");
_c = RecentAnomalies;
function severityColor(sev) {
    switch(sev){
        case "critical":
            return "text-red-600";
        case "high":
            return "text-orange-500";
        case "medium":
            return "text-yellow-500";
        default:
            return "text-green-600";
    }
}
var _c;
__turbopack_context__.k.register(_c, "RecentAnomalies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/project/log-analyzer/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/log-analyzer/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/log-analyzer/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/log-analyzer/frontend/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$components$2f$tables$2f$RecentAnomalies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/log-analyzer/frontend/components/tables/RecentAnomalies.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Checking backend...");
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [trend, setTrend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [severity, setSeverity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/metrics/daily").then({
                "Home.useEffect": (res)=>{
                    const formatted = res.data.map({
                        "Home.useEffect.formatted": (d, i)=>({
                                date: `Day ${i + 1}`,
                                error_count: d.error_count ?? 0
                            })
                    }["Home.useEffect.formatted"]);
                    setTrend(formatted);
                }
            }["Home.useEffect"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/metrics/summary").then({
                "Home.useEffect": (res)=>{
                    const sev = res.data.severity || {};
                    setSeverity([
                        {
                            name: "Low",
                            value: sev.low || 0
                        },
                        {
                            name: "Medium",
                            value: sev.medium || 0
                        },
                        {
                            name: "High",
                            value: sev.high || 0
                        },
                        {
                            name: "Critical",
                            value: sev.critical || 0
                        }
                    ]);
                }
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/").then({
                "Home.useEffect": (res)=>{
                    console.log("SUCCESS:", res.data);
                    setMsg("Backend Connected ✅");
                }
            }["Home.useEffect"]).catch({
                "Home.useEffect": (e)=>{
                    console.error("ERROR:", e);
                    setMsg("Backend NOT Connected ❌");
                    setErr(e?.message || "unknown error");
                }
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-10 text-xl font-bold",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: msg
            }, void 0, false, {
                fileName: "[project]/Desktop/project/log-analyzer/frontend/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "text-sm text-red-500 mt-4",
                children: err
            }, void 0, false, {
                fileName: "[project]/Desktop/project/log-analyzer/frontend/app/page.tsx",
                lineNumber: 50,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6"
            }, void 0, false, {
                fileName: "[project]/Desktop/project/log-analyzer/frontend/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$log$2d$analyzer$2f$frontend$2f$components$2f$tables$2f$RecentAnomalies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/project/log-analyzer/frontend/app/page.tsx",
                    lineNumber: 54,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/project/log-analyzer/frontend/app/page.tsx",
                lineNumber: 53,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/project/log-analyzer/frontend/app/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Home, "L6hXml6z4hCNdEF+s5JVe8B1EdA=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_project_log-analyzer_frontend_3938c0f0._.js.map