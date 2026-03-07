import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2015-2022',
    title: 'St Paul\'s Girls\' School',
    subtitle: 'GCSEs and A-Levels',
    skills: 'Further Mathematics, Economics, Physics',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2022-2025',
    title: 'LSE',
    subtitle: 'BSc Mathematics and Economics',
    skills: 'Statistical Modelling, Data Analysis, Linear Algebra '
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2023',
    title: 'New Wave Biotech, Biotech startup',
    subtitle: 'Strategy Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2024',
    title: 'Arup, global engineering consultancy',
    subtitle: 'Deals Advisory Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2025',
    title: 'Aventur, WealthTech scaleup',
    subtitle: 'Quantitative Investment Associate',
    position: 'right',
  }
]