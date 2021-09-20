import { JSONFile, Low } from 'lowdb';
import path from 'path';

const file = path.resolve(process.cwd(), "db.json");
const adapter = new JSONFile(file);

const db = new Low(adapter);

export async function init() {
  await db.read();
}

export async function addInstall(opts) {
  db.data.installs[opts.site_name] = {
    api_endpoint: opts.api_endpoint,
    free: opts.free,
    recurrency: opts.recurrency,
    user_lang: opts.user_lang,
    plan_uuid: opts.app_plan_uuid
  }

  db.data.auth[opts.site_name] = opts.auth;

  await db.write();
}

export async function removeInstall(opts) {
  delete db.data.installs[opts.site_name];
  delete db.data.auth[opts.site_name];

  await db.write();
}

export async function upgradeInstall(opts) {
  db.data.installs[opts.site_name].plan_uuid = opts.app_plan_uuid;
  db.data.installs[opts.site_name].recurrency = opts.recurrency;

  await db.write();
}

export async function getInstall(site_name) {
  return {
    auth: db.data.auth[site_name],
    about: {
      site_name,
      ...db.data.installs[site_name] 
    }
  }
}