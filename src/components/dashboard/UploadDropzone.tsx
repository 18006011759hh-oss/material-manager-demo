import { FileUp } from 'lucide-react';

export function UploadDropzone() {
  return (
    <div className="rounded-lg border border-dashed border-gray-400 bg-white px-5 py-10">
      <div className="flex items-center justify-center gap-4 text-center">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-line bg-gray-50">
          <FileUp className="h-6 w-6 text-gray-600" />
        </span>
        <div className="text-left">
          <p className="text-sm font-medium text-ink">拖拽素材文件到此处，快速导入</p>
          <p className="mt-2 text-sm text-gray-700">支持视频 / 图片 / 音频</p>
        </div>
      </div>
    </div>
  );
}
