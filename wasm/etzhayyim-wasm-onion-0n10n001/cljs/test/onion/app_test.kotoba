(ns onion.app-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [re-frame.db :as rf-db]
            [onion.app :as app]))

(use-fixtures :each
  {:before (fn [] (rf/clear-subscription-cache!) (reset! rf-db/app-db {}))})

(deftest initialize-db-sets-defaults
  (testing ":initialize-db populates every fact the Svelte scaffold held (route-count/routes/vars corrected to wrangler.jsonc, xrpc? corrected to the dropped `main`)"
    (rf/dispatch-sync [:initialize-db])
    (is (= app/default-db @rf-db/app-db))
    (is (= "Onion 0n10n001" @(rf/subscribe [:app/title])))
    (is (= "etzhayyim-wasm-onion-0n10n001" @(rf/subscribe [:app/name])))
    (is (= "etzhayyim-project-onion" @(rf/subscribe [:app/project])))
    (is (= "wasm appview" @(rf/subscribe [:app/kind])))
    (is (= 2 @(rf/subscribe [:app/route-count])))
    (is (= ["0n10n001.etzhayyim.com/*" "onion.etzhayyim.com/*"]
           @(rf/subscribe [:app/routes])))
    (is (= 14 (count @(rf/subscribe [:app/vars]))))
    (is (false? @(rf/subscribe [:app/xrpc?])))
    (is (= "wasm/etzhayyim-wasm-onion-0n10n001/cljs/src/onion/app.cljs"
           @(rf/subscribe [:app/relative-path])))))

(deftest routes-sub-reflects-db
  (testing ":app/routes reads whatever is in the db, not a fixed value"
    (reset! rf-db/app-db {:app/routes ["only-one.example.com/*"]})
    (is (= ["only-one.example.com/*"] @(rf/subscribe [:app/routes])))))

(deftest vars-sub-reflects-db
  (testing ":app/vars reads whatever is in the db, not a fixed value"
    (reset! rf-db/app-db {:app/vars []})
    (is (= [] @(rf/subscribe [:app/vars])))))

(deftest xrpc-sub-reflects-db
  (testing ":app/xrpc? reads whatever is in the db, not a fixed value"
    (reset! rf-db/app-db {:app/xrpc? true})
    (is (true? @(rf/subscribe [:app/xrpc?])))))

(deftest initialize-db-overwrites-prior-state
  (testing ":initialize-db resets to defaults even if the db already had other data"
    (reset! rf-db/app-db {:app/title "stale" :app/xrpc? true :unrelated 42})
    (rf/dispatch-sync [:initialize-db])
    (is (= app/default-db @rf-db/app-db))))
