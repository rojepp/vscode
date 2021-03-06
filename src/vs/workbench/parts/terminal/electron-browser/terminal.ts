/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as os from 'os';
import platform = require('vs/base/common/platform');
import processes = require('vs/base/node/processes');

const powerShellExePath =
		!process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432')
			? `${process.env.windir}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
			: `${process.env.windir}\\Sysnative\\WindowsPowerShell\\v1.0\\powershell.exe`;

const isAtLeastWindows10 = platform.isWindows && parseFloat(os.release()) >= 10;

export const TERMINAL_DEFAULT_SHELL_WINDOWS = isAtLeastWindows10 ? powerShellExePath : processes.getWindowsShell();
