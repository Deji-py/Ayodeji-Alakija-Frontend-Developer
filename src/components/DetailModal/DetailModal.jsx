import { Card, Chip, IconButton, Modal } from "@mui/material";
import { CiSquareRemove } from "react-icons/ci";

const DetailModal = ({ open, handleClose, item }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card className="w-[300px] md:w-full border-non ">
        <IconButton onClick={handleClose} className=" float-right">
          <CiSquareRemove size={30} />
        </IconButton>

        <div className="p-5 pt-10">
          <div>
            <div>
              <h2
                id="modal-modal-title"
                variant="h6"
                className="text-xl font-bold "
              >
                {item?.type}
              </h2>
              <div className="flex text-sm flex-row text-blue-500 justify-start items-center gap-1">
                <p>Serial No.:</p>
                <p>{item?.serial}</p>
              </div>
            </div>
            <div className="text-[12px] flex flex-row justify-start items-center gap-1">
              <p>Status:</p>
              <p
                className={`${
                  item?.status === "unknown" ? "text-red-600" : "text-green-600"
                }`}
              >
                {item?.status}
              </p>
            </div>
          </div>
          <div className="status text-sm flex flex-row gap-2 flex-wrap justify-start py-5 items-center">
            <Chip
              className="bg-blue-500"
              size="small"
              label={`land landings: ${item?.land_landings}`}
            />
            <Chip
              size="small"
              label={`water landings: ${item?.water_landings}`}
            />
            <Chip size="small" label={`launches: ${item?.launches?.length}`} />
            <Chip size="small" label={`Reuse Count: ${item?.reuse_count}`} />
          </div>
          <div>
            <h2 className=" underline">Last Update</h2>
            <p
              className="text-sm  text-gray-500"
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              {item?.last_update}
            </p>
          </div>
        </div>
      </Card>
    </Modal>
  );
};

export default DetailModal;
