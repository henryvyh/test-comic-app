import { Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./confirm.sass";

const CustomConfirm = ({
	showConfirm,
	setShowConfirm,
	dismiss = true,
	title,
	message,
	icon,
	neutral,
	cancel,
	accept,
}) => {
	useEffect(() => {
		let bodyStyle = document.body;
		showConfirm
			? (bodyStyle.style.overflowY = "hidden")
			: bodyStyle.removeAttribute("style");
	}, [showConfirm]);

	if (!showConfirm) return null;
	const callbackClose = () => {
		setShowConfirm(false);
	};
	const callbackAccept = () => {
		if (accept) accept?.action();
		callbackClose();
	};
	return createPortal(
		<>
			<div id="root-confirm" className="custom-confirm-box">
				<div
					className="custom-confirm-close"
					onClick={() => dismiss && callbackClose()}
				></div>
				<div className="custom-confirm-wrap">
					<div className="custom-confirm-header">
						<div className="custom-confirm-header-body">
							<span className={`bx bx-${icon ?? "help-circle"}`}></span>
							<h1>{title}</h1>
						</div>
						<Tooltip title="Cerrar ventana">
							<button
								type="button"
								className="modal-close-button"
								onClick={() => callbackClose()}
							>
								<span className="bx bx-x"></span>
							</button>
						</Tooltip>
					</div>
					<div className="custom-confirm-body">
						<div className="custom-confirm-body-view scroll-material">
							<p>{message}</p>
						</div>
						<Tooltip title="Volver arriba">
							<button
								type="button"
								className="custom-confirm-up custom-confirm-up-hide"
							>
								<span className="bx bx-chevron-up"></span>
							</button>
						</Tooltip>
					</div>

					<div className="custom-confirm-bottom">
						<Tooltip title="Cancelar">
							<button
								type="button"
								className="custom-confirm-bottom-cancel"
								onClick={() => callbackClose()}
							>
								<span className="bx bx-x"></span>
								<p>Cancelar</p>
							</button>
						</Tooltip>

						{neutral ? (
							<Tooltip title="Neutral">
								<button
									type="button"
									className="custom-confirm-bottom-neutral"
									onClick={() => callbackClose()}
								>
									<span className="bx bx-block"></span>
									<p>Neutral</p>
								</button>
							</Tooltip>
						) : null}

						<Tooltip title="Aceptar">
							<button
								type="button"
								className="custom-confirm-bottom-accept"
								onClick={() => callbackAccept()}
							>
								<span className="bx bx-check"></span>
								<p>Aceptar</p>
							</button>
						</Tooltip>
					</div>
				</div>
			</div>
		</>,
		document.body
	);
};

export default CustomConfirm;
