#!/bin/bash

npm run build
s3-deploy './dist/ng-diplomacy/**' --cwd './dist/ng-diplomacy/' --region ap-southeast-2 --bucket diplomacy.slt.io --gzip html,js,css,svg --cache 180 --deleteRemoved
 