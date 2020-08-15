const fs = require("fs");

class StorageDto {
  async put(minio, bucket, file, user_id, id) {
    const { name, size, type, path } = file;
    const fileStream = fs.createReadStream(path);
    return new Promise((res, rej) => {
      minio.putObject(
        bucket,
        `${user_id}/${id}/${name}`,
        fileStream,
        size,
        type,
        function (e) {
          if (e) {
            rej(e);
          }
          res("上传成功");
        }
      );
    });
  }

  async delete(minio, bucket, name) {
    return new Promise((res, rej) => {
      minio.removeObject(bucket, name, function (e) {
        if (e) {
          rej(e);
        }
        res("删除成功");
      });
    });
  }
}

module.exports = StorageDto;
