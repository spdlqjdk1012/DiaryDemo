import React, { useState } from 'react';

const ImgUpload = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 파일 크기 검증 (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: 'error', text: '이미지 크기는 5MB를 초과할 수 없습니다.' });
        return;
      }

      // 파일 형식 검증
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        setMessage({ type: 'error', text: '지원하지 않는 파일 형식입니다. (jpg, png, gif만 가능)' });
        return;
      }

      // 미리보기 URL 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);

      // 파일 업로드 진행
      handleUpload(file);
    }
  };

  const handleUpload = async (file) => {
    setLoading(true);
    setMessage({ type: '', text: '' });

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/user/profile/image', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
      } else {
        setMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      setMessage({ type: 'error', text: '이미지 업로드 중 오류가 발생했습니다.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <input
          type="file"
          accept="image/jpeg,image/png,image/gif"
          onChange={handleFileSelect}
          className="hidden"
          id="profileImageInput"
          disabled={loading}
        />
        <label
          htmlFor="profileImageInput"
          className="block w-full p-4 text-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
        >
          {previewUrl ? (
            <div className="relative">
              <img
                src={previewUrl}
                alt="Preview"
                className="mx-auto max-h-48 object-contain"
              />
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                  업로드 중...
                </div>
              )}
            </div>
          ) : (
            <div className="text-gray-500">
              클릭하여 이미지 선택
              <div className="text-sm mt-1">
                (jpg, png, gif / 최대 5MB)
              </div>
            </div>
          )}
        </label>
      </div>

      {message.text && (
        <div
          className={`p-3 rounded-lg text-sm ${
            message.type === 'error' 
              ? 'bg-red-100 text-red-700' 
              : 'bg-green-100 text-green-700'
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default ImgUpload;