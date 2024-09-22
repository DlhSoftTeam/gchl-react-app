"use client"

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { GanttChartView, ScheduleChartView, LoadChartView } from "../public/DlhSoft.ProjectData.GanttChart.React.Components";
import { PertChartView, NetworkDiagramView } from "../public/DlhSoft.ProjectData.PertChart.React.Components";

// Set up your DlhSoft Gantt Chart Hyper Library product license here:
const gchlLicense = "...";

export default function Home() {
  // Define items, settings, and change handler for GanttChartView.
  // Note: use setItems if you need to update GanttChartView's data later.
  const [items, setItems] = useState([{ content: 'Item 1' }]);
  const settings = { 
    weekStartDay: 1,
  };
  function onItemChanged(item, propertyName, isDirect, isFinal) {
    console.log("Item " + item.content + " has changed (property " + propertyName + " has become " + item[propertyName] + ").");
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>DlhSoft Gantt Chart Hyper Library – React/next.js demo</h1>

        <div className={styles.ctas}>

          {/* Use GanttChartView component. */}
          <GanttChartView items={items} settings={settings} license={gchlLicense}
                          change={onItemChanged} style={{width: "960px", height: "350px"}}/>

        </div>
      </main>
      <footer className={styles.footer}>
      <a
          href="https://dlhsoft.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          DlhSoft
        </a>

        <a
          href="https://dlhsoft.com/GCHL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Ganttt Chart Hyper Library →
        </a>
      </footer>
    </div>
  );
}
