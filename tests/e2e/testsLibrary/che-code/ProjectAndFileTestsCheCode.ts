/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { By, until } from 'selenium-webdriver';
import { DriverHelper } from '../../utils/DriverHelper';
import { CLASSES } from '../../inversify.types';
import { Logger } from '../../utils/Logger';
import { TimeoutConstants } from '../../TimeoutConstants';

@injectable()
export class ProjectAndFileTestsCheCode {

    constructor(
        @inject(CLASSES.DriverHelper) private readonly driverHelper: DriverHelper) {}

    public async waitWorkspaceReadinessForCheCodeEditor(): Promise<void> {
        try {
            await this.driverHelper.getDriver().wait(until.elementLocated(By.className('monaco-workbench')), TimeoutConstants.TS_SELENIUM_START_WORKSPACE_TIMEOUT);
        } catch (err) {
            Logger.error(`ProjectAndFileTestsCheCode.waitWorkspaceReadinessForCheCodeEditor - waiting for workspace readiness failed: ${err}`);
            throw err;
        }
    }
}
