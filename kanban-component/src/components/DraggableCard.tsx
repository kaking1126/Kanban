import React from 'react';
import { useDrag, DragSourceMonitor  } from 'react-dnd';
import { Card } from 'antd';

interface DraggableCardProps {
    id: string;
    title: string;
}

interface DragItem {
    type: string;
    id: string;
    title: string;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ id, title }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'CARD',
        item: () => ({
            type: 'CARD',
            id,
            title
        }),
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    return (
        <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <Card title={title} style={{ marginBottom: 16 }} bordered={false}>
                {/* Card content */}
            </Card>
        </div>
    );
};

export default DraggableCard;