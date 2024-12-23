import { type JSX } from 'react';

import { downloadJsonAsFile } from '@/core/utils';
import { useAppSelector } from '@/app';
import { Button } from '@/core/components';

const JSON_FILE_NAME = 'downloaded_data.json';

export type JsonFileDownloaderProps = {
  loader: () => JSONValue[];
};

export const EditorJsonDownloader = (): JSX.Element => {
  const data = useAppSelector((s) => s.editor.items);

  const hasData = data.length > 0;

  const handleDownloadFile = () => {
    downloadJsonAsFile(data, JSON_FILE_NAME);
  };

  return (
    <div>
      <Button disabled={!hasData} type="button" onClick={handleDownloadFile}>
        Download JSON file
      </Button>
    </div>
  );
};
